import React from "react";
import styles from "./ReviewForm.module.css";
import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "./ReviewForm.interface";

const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  const {register, control, handleSubmit, formState: {errors}} = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form, className)} {...props}>
        <Input
          {...register('name', {required: {value: true, message: 'Введите имя'}})}
          placeholder='Имя'
          error={errors.name}
        />
        <Input
          {...register('title', {required: {value: true, message: 'Введите заголовок'}})}
          className={styles.title}
          placeholder='Заголовок отзыва'
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка: </span>
          <Controller
            control={control}
            name='rating'
            render={({field}) => (
              <Rating rating={field.value} ref={field.ref} isEditable setRating={field.onChange}/>
            )}
          />
        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Введите текст отзыва'}})}
          className={styles.description}
          placeholder='Текст отзыва'
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен!</div>
        <div>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <svg className={styles.successClose} width="12" height="12" viewBox="0 0 12 12" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <line x1="2.06066" y1="1.93934" x2="10.5459" y2="10.4246" stroke="#1CC37E" strokeWidth="3"/>
          <line x1="1.93934" y1="10.4246" x2="10.4246" y2="1.93935" stroke="#1CC37E" strokeWidth="3"/>
        </svg>
      </div>
    </form>
  );
};

export default ReviewForm;
