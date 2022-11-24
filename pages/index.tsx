import { GetStaticProps } from 'next';
import React from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import P from '../components/P/P';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = React.useState(0);
  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button appearance="primary">Кнопка prime</Button>
      <Button appearance="ghost" arrow="down">
        Кнопка ghost
      </Button>
      <P size="l">Бошьшой параграф</P>
      <P size="m">Средний параграф</P>
      <P size="s">Маленький параграф</P>
      <Tag size="s" color="red">
        hh.ru
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="s" color="gray">
        Gray
      </Tag>
      <Tag size="s" color="ghost">
        Ghost
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true}></Rating>
      <Input placeholder='Тест'/>
      <Textarea placeholder='Тест текстарии'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    },
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
