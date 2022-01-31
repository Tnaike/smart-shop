const initialState = [];

const addItems = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADDITEM':
      return [...state, payload];
      break;

    case 'DELITEM':
      return (state = state.filter((x) => {
        return x.id !== payload.id;
      }));
      break;

    default:
      return state;
      break;
  }
};

export default addItems;
