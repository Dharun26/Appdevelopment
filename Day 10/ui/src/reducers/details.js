const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'TRAIN_SELECTION') {
    return { ...state, selectedTrainId: action.id };
  } else if (action.type === 'SEAT_SELECTION') {
    return { ...state, selectedSeats: action.seats };
  }
  return state;
};