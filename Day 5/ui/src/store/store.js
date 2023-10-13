import {  combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import trains from '../reducers/trains';
import search from './../reducers/search';
import details from './../reducers/details';
import seatSelectionReducer from '../reducers/seatSelectionReducer';

const reducers = combineReducers({ search, trains, details , seatSelection: seatSelectionReducer  });
export const store = createStore(reducers);