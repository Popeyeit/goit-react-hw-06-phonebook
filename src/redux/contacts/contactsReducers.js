import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeItem, filterItems, toggle } from './contactsActions';
const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [removeItem]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});
const filter = createReducer('', {
  [filterItems]: (state, action) => action.payload,
});
const hasNameInContacts = createReducer(false, {
  [toggle]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  hasNameInContacts,
});
