import { ADD_ITEM, REMOVE_ITEM, CONFIRM_REMOVE_ITEM } from '../actions/items.action';

const initialState = {
  list: [],
  selected: null,
};

const ItemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        selected: state.list.find(item => item.id === action.itemID),
      };
    case CONFIRM_REMOVE_ITEM:
      return {
        ...state,
        selected: null,
        list: state.list.filter(item => item.id !== state.selected.id),
      };
    default:
      return state;
  }
};

export default ItemsReducer;