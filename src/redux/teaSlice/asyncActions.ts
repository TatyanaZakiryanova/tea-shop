import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchParams, Tea } from './types';
import axios from 'axios';

export const fetchTeas = createAsyncThunk<Tea[], SearchParams>(
  'tea/fetchTeasStatus',
  async (params) => {
    const { order, category, search, sortBy, currentPage } = params;
    const { data } = await axios.get(
      `https://6608a863a2a5dd477b14ab61.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${search}&page=${currentPage}&limit=${10}`,
    );
    return data;
  },
);
