export interface Products {
  id: string;
  name: string;
  image: string;
  price: number;
  tag: string;
  model: string;
  createdAt: string;
  updatedAt: string;
}
export interface ProductsContextType {
  products: Products[];
  loading: boolean;
}
