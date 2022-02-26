const cartItem = [];

const handleCart = (state = cartItem, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADDITEM':
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //Increase the Quantity
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      }else{
        const product = action.payload;
        return [...state, {...product, qty: 1,}];
      }
      

    case 'DELITEM':
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));

    default:
      return state;
  }
};

export default handleCart;
