export interface News {
  id: string;
  image: string;
  title: string;
  text: string;
  paragraphs: string[];
  slug: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export interface NewsContextType {
  news: News[];
  loading: boolean;
}
