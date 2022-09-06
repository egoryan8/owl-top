import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button appearance="primary">Кнопка prime</Button>
      <Button appearance="ghost" arrow="down">
        Кнопка ghost
      </Button>
    </>
  );
}
