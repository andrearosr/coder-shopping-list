import { createStore, combineReducers } from 'redux';

import ItemsReducer from './reducers/items.reducer';

const RootReducer = combineReducers({
  items: ItemsReducer,
});

export default createStore(RootReducer);