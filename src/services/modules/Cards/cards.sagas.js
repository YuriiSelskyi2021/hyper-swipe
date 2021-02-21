import { call, put } from 'redux-saga/effects';
import cardsApi from './cards.api';
import * as CardsActionsTypes from './cards.actions';

function* getCards() {
  try {
    const result = yield call(cardsApi.getCards);
    yield put(CardsActionsTypes.getCards.success(result));
  } catch (error) {
    yield put(CardsActionsTypes.getCards.failure(error.data));
  }
}

export default getCards;
