import { INCREMENT, DECREMENT, RESET } from '../constants';

const initialState = {
  count: 0,
};
const countReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case RESET: {
      return {
        ...state,
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};

export default countReducer;
