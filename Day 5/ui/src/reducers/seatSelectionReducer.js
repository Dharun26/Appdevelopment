const initialState = {
    selectedSeats: [],
  };
  
  const seatSelectionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_SEATS':
        return {
          ...state,
          selectedSeats: action.seats,
        };
      default:
        return state;
    }
  };
  
  export default seatSelectionReducer;