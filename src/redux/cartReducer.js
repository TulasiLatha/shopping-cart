const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the item is already in the cart
      if (!state.some((item) => item.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
