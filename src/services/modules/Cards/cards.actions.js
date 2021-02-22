import { createRequestTypes, action } from 'utils/redux';

export const GET_CARDS = createRequestTypes('GET_CARDS');
export const SWIPE_CARD = createRequestTypes('SWIPE_CARD');

export const getCards = {
  request: (data) => action(GET_CARDS.REQUEST, data),
  success: (data) => action(GET_CARDS.SUCCESS, data),
  failure: (error) => action(GET_CARDS.FAILURE, error),
};

export const swipeCard = {
  request: (data) => action(SWIPE_CARD.REQUEST, data),
  success: (data) => action(SWIPE_CARD.SUCCESS, data),
  failure: (error) => action(SWIPE_CARD.FAILURE, error),
};
