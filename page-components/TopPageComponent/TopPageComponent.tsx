import React from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";

import styles from './TopPageComponent.module.css';
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import HhData from "../../components/HhData/HhData";
import {TopLevelCategory} from "../../interfaces/page.interface";

const TopPageComponent = ({ page, firstCategory, products }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='gray' size='m'>{products.length}</Tag>}
        <span>
          Сортировка
        </span>
      </div>
      <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
    </div>
  );
};

export default TopPageComponent;