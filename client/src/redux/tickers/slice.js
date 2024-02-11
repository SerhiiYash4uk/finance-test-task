import { createSlice, createSelector } from '@reduxjs/toolkit';

import {
  removeFromTickers,
  removeFrozenTickers,
  addFrozenTickers,
  removeFromDeletedTickers,
} from '../utils';

import { TIME_TO_UPDATE_5s } from '../../constants';

const tickersSlice = createSlice({
  name: 'tickers',
  initialState: {
    isFetching: false,
    tickers: [],
    deletedTickers: [],
    frozenTickers: [],
    timeToUpdate: TIME_TO_UPDATE_5s,
  },
  reducers: {
    setTickers: (state, { payload }) => {
      state.tickers = payload;
      if (state.deletedTickers.length) {
        removeFromTickers(state);
      }
      if (state.frozenTickers.length) {
        addFrozenTickers(state);
      }
    },
    freezeTicker(state, { payload }) {
      state.frozenTickers = [...state.frozenTickers, payload];
      addFrozenTickers(state);
    },
    unfreezeTicker(state, { payload }) {
      removeFrozenTickers(state, { payload });
    },
    deleteTicker(state, { payload }) {
      state.deletedTickers = [...state.deletedTickers, payload];
      removeFromTickers(state);
      if (state.frozenTickers.length) {
        removeFrozenTickers(state, payload);
      }
    },
    addTicker(state, { payload }) {
      state.tickers = [payload, ...state.tickers];
      removeFromDeletedTickers(state, payload);
    },
    changeUpdatingTime(state, { payload }) {
      state.timeToUpdate = payload;
    },
  },
});

export const selectTickerList = createSelector(
  (state) => state.tickers,
  ({ tickers }) => tickers
);

export const selectDeletedTickerList = createSelector(
  (state) => state.tickers,
  ({ deletedTickers }) => deletedTickers
);

export const selectUpdatedTime = createSelector(
  (state) => state.tickers,
  ({ timeToUpdate }) => timeToUpdate
);

export const selectTickersLoadingStatus = createSelector(
  (state) => state.tickers,
  ({ isFetching }) => isFetching
);

export const {
  setTickers,
  freezeTicker,
  unfreezeTicker,
  deleteTicker,
  addTicker,
  changeUpdatingTime,
} = tickersSlice.actions;

export const tickersReducer = tickersSlice.reducer;
