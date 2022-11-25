import React, {useState} from 'react';
import styles from './Product.module.css';
import {ProductProps} from './Product.props';
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import {declOfNum, priceRu} from "../../helpers/helpers";
import Divider from "../Divider/Divider";
import Image from "next/image";
import cn from "classnames";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const Product = ({product}: ProductProps): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  return (
    <>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
            quality={100}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice &&
            <Tag
              className={styles.oldPrice}
              color='green'
              size='s'
            >
              - {priceRu(product.oldPrice - product.price)}
            </Tag>
          }
        </div>
        <div className={styles.credit}>{priceRu(product.credit)}<span className={styles.month}>/мес</span></div>
        <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
        <div className={styles.tags}>
          {product.categories.map(c =>
            <Tag
              className={styles.category}
              color='ghost'
              size='s'
              key={c}
            >
              {c}
            </Tag>
          )}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>
        <div
          className={styles.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
        <Divider className={styles.hr}/>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(c => (
            <div className={styles.characteristic} key={c.name}>
              <span className={styles.characteristicsTitle}>{c.name}</span>
              <span className={styles.characteristicsDots}></span>
              <span className={styles.characteristicsValue}>{c.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advBlock}>
          {
            product.advantages &&
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              {product.advantages}
            </div>
          }
          {
            product.disadvantages &&
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              {product.disadvantages}
            </div>
          }
        </div>
        <Divider className={cn(styles.hr, styles.hr2)}/>
        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button
            appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            {isReviewOpened ? 'Скрыть отзывы' : 'Читать отзывы'}
          </Button>
        </div>
      </Card>
      <Card
        color='blue'
        className={cn(styles.reviews, {
          [styles.opened]: isReviewOpened,
          [styles.closed]: !isReviewOpened,
        })}>
        {product.reviews.map(r => (
          <>
            <Review review={r} key={r._id}/>
            <Divider/>
          </>
        ))}
        <ReviewForm productId={product._id}/>
      </Card>
    </>
  );
};

export default Product;
