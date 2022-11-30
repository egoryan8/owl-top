import React, {useState} from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useRouter} from "next/router";
import SearchIcon from '../../assets/img/search.svg';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  const goToSearch = async () => {
    await router.push({
      pathname: '/search',
      query: {
        q: searchValue
      }
    });
  };

  const handleEnterDown = async (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
     await goToSearch();
    }
  }

  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        placeholder="Поиск..."
        className={styles.input}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        // @ts-ignore
        onKeyDown={handleEnterDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label={"Поиск по сайту"}
      >
        <SearchIcon/>
      </Button>
    </form>
  );
};

export default Search;
