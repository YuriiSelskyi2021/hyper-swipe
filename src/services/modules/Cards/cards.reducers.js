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
        cards: action.payload.data,
      };
    }
    case Action.GET_CARDS.FAILURE: {
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
