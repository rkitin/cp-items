// reducers/people.js
import { SELECT, ITEM, CONTENT } from './constants';

const initialState = { value: SELECT };

export default function foucsReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM:
      return {...state, value: ITEM };
    case CONTENT:
      return {...state, value: CONTENT };
    default:
      return {...state, ...initialState };
  }
}
