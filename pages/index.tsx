import React from 'react';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import P from '../components/P/P';
import Rating from '../components/Rating/Rating';
import Tag from '../components/Tag/Tag';

export default function Home(): JSX.Element {
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
    </>
  );
}
