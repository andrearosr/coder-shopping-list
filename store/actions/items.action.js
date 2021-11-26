export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_REMOVE_ITEM = 'CONFIRM_REMOVE_ITEM';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  itemID: id,
});

export const confirmRemoveItem = () => ({
  type: CONFIRM_REMOVE_ITEM,
});