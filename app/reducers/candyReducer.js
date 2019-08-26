import axios from 'axios';

const GOT_CANDIES = 'GOT_CANDIES';
const GOT_SINGLE_CANDY = 'GOT_SINGLE_CANDY';
const INCREASED_QUANTITY = 'INCREASED_QUANTITY';

export const gotCandies = candies => {
  return { type: GOT_CANDIES, candies };
};
export const gotSingleCandy = candy => {
  return { type: GOT_SINGLE_CANDY, candy };
};
export const increasedQuantity = quantity => {
  return { type: INCREASED_QUANTITY, quantity };
};

export const buildGetCandiesThunk = () => {
  return async dispatch => {
    const { data: candies } = await axios.get('/api/candies');
    dispatch(gotCandies(candies));
  };
};

export const buildGetSingleCandyThunk = id => {
  return async dispatch => {
    const { data: candy } = await axios.get(`/api/candies/${id}`);
    dispatch(gotSingleCandy(candy));
  };
};

export const buildIncreaseThunk = (id, quantity) => {
  return async dispatch => {
    await axios.patch(`/api/candies/${id}`, { quantity: quantity + 1 });
    dispatch(increasedQuantity(quantity + 1));
  };
};

const initialState = {
  candies: [],
  currentCandy: {},
};

export const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return { ...state, candies: action.candies };
    case GOT_SINGLE_CANDY:
      return { ...state, currentCandy: action.candy };
    case INCREASED_QUANTITY:
      var currentCandy = { ...state.currentCandy, quantity: action.quantity };
      return { ...state, currentCandy };
    default:
      return state;
  }
};
