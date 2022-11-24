import React from 'react';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import cn from 'classnames';
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";

const Product = ({ product, children, className, ...props }: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
      <div className={styles.tags}>{product.categories.map(c => <Tag color='ghost' size='s' key={c}>{c}</Tag>)}</div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>{product.reviewsCount} отзывов</div>
      <div className={styles.hr}><hr/></div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
          <div className={styles.advantages}>
              <div>Преимущества</div>
              {product.advantages}
          </div>
          <div className={styles.disadvantages}>
              <div>Недостатки</div>
              {product.disadvantages}
          </div>
      </div>
      <div className={styles.hr}><hr/></div>
      <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button appearance='ghost' arrow='right'>Читать отзывы</Button>
      </div>


    </Card>
  );
};

export default Product;
