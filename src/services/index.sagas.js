import { all, fork } from 'redux-saga/effects';
import cards from './modules/Cards/cards.sagas';

export default function* rootSaga() {
  yield all([fork(cards)]);
}
