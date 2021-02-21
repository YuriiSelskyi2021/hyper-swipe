import { createRequestTypes, action } from 'utils/redux';

export const GET_CARDS = createRequestTypes('GET_CARDS');

export const getCards = {
  request: (data) => action(GET_CARDS.REQUEST, data),
  success: (data) => action(GET_CARDS.SUCCESS, data),
  failure: (error) => action(GET_CARDS.FAILURE, error),
};
