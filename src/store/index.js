import {createStore, applyMiddleware} from 'redux';
import cafeReducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(cafeReducer, applyMiddleware(thunk));

// store.subscribe(()=>console.log(store.getState()));

export default store;
