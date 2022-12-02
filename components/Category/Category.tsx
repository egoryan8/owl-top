import Link from 'next/link'
import React from 'react'
import {MenuItem} from '../../interfaces/menu.interface';
import styles from './Category.module.css';

const Category = ({category}: { category: MenuItem }): JSX.Element => {
  return (
    <li className={styles.category}>
      <h2 className={styles.title}>{category._id.secondCategory}</h2>
      <ul className={styles.categories}>
        {
          category.pages.slice(0,7).map(i => (
            <li key={i._id}>
              <Link href={"courses/" + i.alias} className={styles.item}>
                {i.category}
              </Link>
            </li>
          ))
        }
        {
          category.pages.length > 7 && <li className={styles.dots}>...</li>
        }
      </ul>
    </li>
  )
}

export default Category