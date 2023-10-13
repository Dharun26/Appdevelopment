import React from 'react';
import './style.css';
import Routing from './Routing';
import { Provider } from 'react-redux';
import {store} from './store/store'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <Routing />
      </Provider>
    );
  }
}