import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  deleteTicker,
  freezeTicker,
  unfreezeTicker,
} from '../../redux/tickers';

import { tickerNames } from '../../constants';
import { dateFormatter } from '../../utils/ticker.utils';

import './TickerItem.css';

export const TickerItem = ({ tickerItem }) => {
  const dispatch = useDispatch();
  const { price, change, change_percent, last_trade_time } = tickerItem;

  const [isFrozen, setFrozen] = useState(false);

  const formatedDate = dateFormatter(last_trade_time);
  const priceChanged = (price - change).toFixed(2);
  const priceChangeClass = priceChanged < 0 ? 'red' : '';
  const priceChangeArrow = priceChanged < 0 ? '⇩' : '⇧';

  const toggleFrozenTicker = () => {
    const newFrozenState = !isFrozen;

    setFrozen(newFrozenState);
    if (newFrozenState) {
      dispatch(freezeTicker(tickerItem));
    } else {
      dispatch(unfreezeTicker(tickerItem));
    }
  };

  const removeTicker = () => {
    dispatch(deleteTicker(tickerItem));
  };

  return (
    <div className={`ticker ${isFrozen ? 'frozen' : ''}`}>
      <button className='freeze' onClick={toggleFrozenTicker}>
        {isFrozen ? 'unfreeze' : 'freeze'}
      </button>

      <button
        className='ticker-btn-delete'
        title='remove'
        onClick={removeTicker}>
        &#10006;
      </button>
      <header className='ticker-header'>
        <h1 className='ticker-title'>{tickerNames[tickerItem.ticker]}</h1>
        <span className={`ticker-precent precent-${priceChangeClass}`}>
          {change_percent} %
        </span>
      </header>
      <main className='ticker-main'>
        <span className='ticker-price'>price: {price} $</span>
        <span className={`ticker-change ${priceChangeClass}`}>
          {priceChanged} $
          <strong className={`ticker-change_arrow arrow-${priceChangeClass}`}>
            {priceChangeArrow}
          </strong>
        </span>
      </main>
      <footer className='ticker-footer'>
        <span>{formatedDate}</span>
      </footer>
    </div>
  );
};
