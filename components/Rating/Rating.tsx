import React, {ForwardedRef, forwardRef} from 'react';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import RateStarsIcon from '../../assets/img/rateStars.svg';

const Rating = forwardRef(({ error, isEditable = false, rating, setRating, ...props }: RatingProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(index + 1)}
          role={isEditable ? "slider" : ''}
          aria-valuenow={rating}
          aria-valuemax={5}
          aria-valuemin={1}
          aria-label={isEditable ? 'Укажите рейтинг' : ('рейтинг: ' + rating)}
        >
          <RateStarsIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };
  return (
    <div {...props} ref={ref} className={cn(styles.ratingWrapper, {
      [styles.error]: error,
    })}>
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
      {error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Rating;
