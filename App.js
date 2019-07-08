import React, { Component } from 'react';
import Counter from './src/components/counter';
import { createStore } from 'redux';
import allReducer from './src/reducers/combineReducer';
import {Provider} from 'react-redux'

const store = createStore(allReducer);

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
           <Counter/>
      </Provider>
    );
  }
}