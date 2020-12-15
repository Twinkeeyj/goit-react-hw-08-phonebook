import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import listAction from './listActions';

const initialState = {
  contacts: [],
  filter: '',
};

const newContact = (state, action) => [...state, action.payload];

const removeAnyContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer(initialState.contacts, {
  [listAction.addListSuccess]: newContact,
  [listAction.fetchListSuccess]: (_, action) => action.payload,
  [listAction.removeListSuccess]: removeAnyContact,
});

const filter = createReducer(initialState.filter, {
  [listAction.filterContact]: (_, action) => action.payload,
});
const loading = createReducer(false, {
  [listAction.addListRequest]: () => true,
  [listAction.addListSuccess]: () => false,
});
// const error = createReducer(null);

export default combineReducers({ items, filter, loading });
