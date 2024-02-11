import React from 'react';

import { NoTickers, TickerItem } from '..';

import './TickerList.css';

export const TickerList = ({ tickers }) => {
  if (!tickers.length) {
    return <NoTickers />;
  }

  return (
    <section className='tickers-section'>
      {tickers.map((tickerItem) => (
        <TickerItem tickerItem={tickerItem} key={tickerItem.ticker} />
      ))}
    </section>
  );
};
