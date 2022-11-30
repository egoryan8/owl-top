import React, {useState} from "react";
import styles from "./ReviewForm.module.css";
import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api";
import CloseMessageIcon from '../../assets/img/closeMessage.svg';

const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  const {register, control, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('');

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
      if (data.message) {
        setError('');
        setIsSuccess(true);
        reset();
      } else {
        setIsSuccess(false);
        setError('Что-то пошло не так :(');
      }
    } catch (e: any) {
      setIsSuccess(false);
      setError('Что-то пошло не так: ' + e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form, className)} {...props}>
        <Input
          {...register('name', {required: {value: true, message: 'Введите имя'}})}
          placeholder='Имя'
          error={errors.name}
          aria-invalid={!!errors.name}
        />
        <Input
          {...register('title', {required: {value: true, message: 'Введите заголовок'}})}
          className={styles.title}
          placeholder='Заголовок отзыва'
          error={errors.title}
          aria-invalid={!!errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка: </span>
          <Controller
            control={control}
            name='rating'
            rules={{required: {value: true, message: 'Оцените курс'}}}
            render={({field}) => (
              <Rating
                rating={field.value}
                ref={field.ref}
                isEditable
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Введите текст отзыва'}})}
          className={styles.description}
          placeholder="Текст отзыва"
          error={errors.description}
          aria-label="Текст отзыва"
          aria-invalid={!!errors.description}
        />
        <div className={styles.submit}>
          <Button appearance='primary' onClick={() => clearErrors()}>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess &&
        <div className={cn(styles.panel, styles.success)} role="alert">
          <div className={styles.successTitle}>Ваш отзыв отправлен!</div>
          <div>
            Спасибо, ваш отзыв будет опубликован после проверки.
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className={styles.close}
            aria-label="Закрыть оповещение"
          >
            <CloseMessageIcon strokeWidth='3'/>
          </button>
        </div>}
      {error &&
        <div className={cn(styles.panel, styles.error)}>
          <div className={styles.errorTitle}>{'Ошибка'}</div>
          <button
            onClick={() => setError('')}
            className={styles.close}
            aria-label="Закрыть оповещение"
          >
            <CloseMessageIcon strokeWidth='3'/>
          </button>
        </div>}
    </form>
  );
};

export default ReviewForm;
