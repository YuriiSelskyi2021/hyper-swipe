const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const action = (type, data = {}) => {
  return { type, payload: data };
};

export const createApiAction = (type) => ({
  request: (payload) => ({
    type: `${type}_${REQUEST}`,
    payload,
  }),
  success: (payload) => ({
    type: `${type}_${SUCCESS}`,
    payload,
  }),
  failure: (error) => ({ type: `${type}_${FAILURE}`, error }),
});
