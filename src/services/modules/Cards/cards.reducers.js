import * as Action from './cards.actions';

const initialState = {
  loading: false,
  error: null,
  cards: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Action.GET_CARDS.REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case Action.GET_CARDS.SUCCESS: {
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };
    }
    case Action.GET_CARDS.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    case Action.SWIPE_CARD.REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case Action.SWIPE_CARD.SUCCESS: {
      return {
        ...state,
        loading: false,
        cards: action.payload,
      };
    }
    case Action.SWIPE_CARD.FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};
