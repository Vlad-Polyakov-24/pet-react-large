import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from '../../types/article.types';

const fetchArticleByID = createAsyncThunk<ArticleType, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleByID',
  async (articleID, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ArticleType>(`/articles/${articleID}`);

      if (!response.data) throw new Error();

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);

export default fetchArticleByID;