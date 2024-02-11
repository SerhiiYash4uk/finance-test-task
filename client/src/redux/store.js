import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tickersReducer } from './tickers';

export const rootReducer = combineReducers({
  tickers: tickersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
