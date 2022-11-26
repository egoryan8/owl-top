import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import CoursesIcon from '../assets/img/courses.svg';
import ServicesIcon from '../assets/img/services.svg';
import BooksIcon from '../assets/img/books.svg';
import ProductsIcon from '../assets/img/products.svg';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon/>,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services.svg',
    name: 'Сервисы',
    icon: <ServicesIcon/>,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon/>,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon/>,
    id: TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
}

export const declOfNum = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}