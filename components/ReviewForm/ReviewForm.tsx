import React from 'react';
import styles from './ReviewForm.module.css';
import {ReviewFormProps} from './ReviewForm.props';
import cn from 'classnames';
import Input from "../Input/Input";
import Rating from "../Rating/Rating";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";

const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.form, className)} {...props}>
        <Input placeholder='Имя'/>
        <Input className={styles.title} placeholder='Заголовок отзыва'/>
        <div className={styles.rating}>
          <span>Оценка: </span>
          <Rating rating={0}/>
        </div>
        <Textarea className={styles.description} placeholder='Текст отзыва'/>
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
        <svg className={styles.successClose} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2.06066" y1="1.93934" x2="10.5459" y2="10.4246" stroke="#1CC37E" strokeWidth="3"/>
          <line x1="1.93934" y1="10.4246" x2="10.4246" y2="1.93935" stroke="#1CC37E" strokeWidth="3"/>
        </svg>
      </div>
    </>
  );
};

export default ReviewForm;
