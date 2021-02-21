import { combineReducers } from 'redux';
import cards from './modules/Cards/cards.reducers';

const allReducers = combineReducers({
  cards,
});

const rootReducers = (state, action) => {
  return allReducers(state, action);
};

export default rootReducers;
