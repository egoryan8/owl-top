import {PageModel, TopLevelCategory} from "../../interfaces/page.interface copy";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: PageModel;
  products: ProductModel[];
}