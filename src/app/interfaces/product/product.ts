import { Brand } from '../brand';
import { Category } from './category';

export interface Product {
  title: string;
  _id: string;
  imageCover: string;
  price: number;
  ratingsAverage: number;
  category: Category;
  images: string[];
  description: string;
  brand: Brand;
}
