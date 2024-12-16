import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Expense', 'Category', 'Budget', 'User'],
  endpoints: (builder) => ({
    // Expenses
    getExpenses: builder.query({
      query: () => '/expenses',
      providesTags: ['Expense'],
    }),
    addExpense: builder.mutation({
      query: (expense) => ({
        url: '/expenses',
        method: 'POST',
        body: expense,
      }),
      invalidatesTags: ['Expense'],
    }),
    
    // Categories
    getCategories: builder.query({
      query: () => '/categories',
      providesTags: ['Category'],
    }),
    
    // Budgets
    getBudgets: builder.query({
      query: () => '/budgets',
      providesTags: ['Budget'],
    }),
    
    // User/Auth
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/users/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useAddExpenseMutation,
  useGetCategoriesQuery,
  useGetBudgetsQuery,
  useLoginMutation,
  useRegisterMutation,
} = apiSlice;
