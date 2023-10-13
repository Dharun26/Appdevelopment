const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'SEARCH_TRAIN') {
    return { ...state, ...action.search };
  }
  return state;
};