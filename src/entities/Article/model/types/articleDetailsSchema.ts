import { ArticleType } from './article.types';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: ArticleType;
}