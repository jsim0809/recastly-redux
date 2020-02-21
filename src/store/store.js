import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

const store = createStore(rootReducer, { currentVideo: null, videoList: [] }, composeWithDevTools(applyMiddleware(thunk)));

export default store;
