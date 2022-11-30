import React, {useEffect, useReducer} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";

import styles from './TopPageComponent.module.css';
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import HhData from "../../components/HhData/HhData";
import {TopLevelCategory} from "../../interfaces/page.interface";
import Advantages from "../../components/Advantages/Advantages";
import Sort from "../../components/Sort/Sort";
import {SortEnum} from "../../components/Sort/Sort.props";
import {sortReducer} from "./sort.reducer";
import Product from "../../components/Product/Product";
import {useReducedMotion} from "framer-motion";

const TopPageComponent = ({ page, firstCategory, products }: TopPageComponentProps): JSX.Element => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort});
  };

  useEffect(() => {
    dispatchSort({type: 'reset', initialState: products});
  },[products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {sortedProducts && <Tag className={styles.productsTag} color='gray' size='m' aria-label={products.length + ' курсов'}>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <ul className={styles.products}>
        {sortedProducts && sortedProducts.map(p => (
          <li key={p._id}>
            <Product layout={!shouldReduceMotion} product={p}/>
          </li>
        ))}
      </ul>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>Преимущества</Htag>
        <Advantages advantages={page.advantages}/>
      </>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(t => <Tag key={t} size='s' color='primary'>{t}</Tag>)}
    </div>
  );
};

export default TopPageComponent;