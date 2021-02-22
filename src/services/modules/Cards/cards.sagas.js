import { call, put, takeLatest, select } from 'redux-saga/effects';
import cardsApi from './cards.api';
import * as CardsActionsTypes from './cards.actions';

function* getCards() {
  try {
    const { data } = yield call(cardsApi.getCards);
    yield put(CardsActionsTypes.getCards.success(data));
  } catch (error) {
    yield put(CardsActionsTypes.getCards.failure(error.data));
  }
}

function* handleCardSwipe({ payload: { type, card } }) {
  const likedCards = JSON.parse(localStorage.getItem('likedCards')) || [];
  const dislikedCards = JSON.parse(localStorage.getItem('dislikedCards')) || [];
  try {
    if (type === 'right') {
      likedCards.push(card);
      localStorage.setItem('likedCards', JSON.stringify([...likedCards]));
    } else if (type === 'left') {
      dislikedCards.push(card);
      localStorage.setItem('dislikedCards', JSON.stringify([...dislikedCards]));
    }
    const { cards } = yield select((state) => state.cards);
    const data = cards.filter((item) => item.id !== card);
    yield put(CardsActionsTypes.swipeCard.success(data));
  } catch (error) {
    yield put(CardsActionsTypes.swipeCard.failure(error.data));
  }
}

function* cardsSaga() {
  yield takeLatest([CardsActionsTypes.GET_CARDS.REQUEST], getCards);
  yield takeLatest([CardsActionsTypes.SWIPE_CARD.REQUEST], handleCardSwipe);
}

export default cardsSaga;
