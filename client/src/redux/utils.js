export const removeFromTickers = (state) => {
  for (const deletedTicker of state.deletedTickers) {
    state.tickers = state.tickers.filter(
      ({ ticker }) => ticker !== deletedTicker.ticker
    );
  }
};

export const addFrozenTickers = (state) => {
  for (const freezedTicker of state.frozenTickers) {
    state.tickers = [
      ...state.tickers.filter(({ ticker }) => ticker !== freezedTicker.ticker),
      freezedTicker,
    ];
  }
};

export const removeFrozenTickers = (state, payload) => {
  state.frozenTickers = state.frozenTickers.filter(
    ({ ticker }) => ticker !== payload.ticker
  );
};

export const removeFromDeletedTickers = (state, payload) => {
  state.deletedTickers = state.deletedTickers.filter(
    ({ ticker }) => ticker !== payload.ticker
  );
};
