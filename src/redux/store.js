import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  ContactsList: {},
});
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
