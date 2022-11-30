import React from 'react';
import styles from './Sort.module.css';
import {SortEnum, SortProps} from './Sort.props';
import cn from 'classnames';
import SortIcon from '../../assets/img/sort.svg';

const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div style={{display: 'none'}} id="sort">Сортировка</div>
      <button
        id="rating"
        aria-selected={sort === SortEnum.Rating}
        aria-labelledby="sort rating"
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(styles.sortButton, {
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sortIcon}/>
        По рейтингу
      </button>
      <button
        id="price"
        aria-labelledby="sort price"
        aria-selected={sort === SortEnum.Price}
        onClick={() => setSort(SortEnum.Price)}
        className={cn(styles.sortButton, {
          [styles.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon className={styles.sortIcon}/>
        По цене
      </button>

    </div>

  );
};

export default Sort;
