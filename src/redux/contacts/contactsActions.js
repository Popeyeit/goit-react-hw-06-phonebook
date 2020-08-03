import { ADD, REMOVE, FILTER, TOGGLE } from './contactsConstants';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(ADD);

export const removeItem = createAction(REMOVE);

export const filterItems = createAction(FILTER);

export const toggle = createAction(TOGGLE);
