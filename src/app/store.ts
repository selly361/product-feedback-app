import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import productFeedbackReducer from '../features/product-feedback-app/productFeedbackSlice';

export const store = configureStore({
  reducer: productFeedbackReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
