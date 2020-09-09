export const countReducer = (state, { type, payload }) => {
  if (type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (type === 'RESET') {
    return {
      ...state,
      count: 0,
    };
  }
  return state;
};
export const initialState = { count: 0 };
