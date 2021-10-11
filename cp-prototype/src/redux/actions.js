import { SELECT, ITEM, CONTENT } from './constants';

export function item(data) {
  return {
    type: ITEM,
    data,
  };
}

export function content(data) {
  return {
    type: CONTENT,
    data,
  };
}

export function reset(data) {
  return {
    type: SELECT,
    data,
  };
}
