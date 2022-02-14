export const addItem = (product) => {
  return {
    type: 'ADDITEM',
    payload: product,
  };
};

export const deleteItem = (product) => {
  return {
    type: 'DELITEM',
    payload: product,
  };
};
