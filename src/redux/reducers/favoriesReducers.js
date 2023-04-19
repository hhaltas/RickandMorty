import {ADD_FAVORIES, REMOVE_FAVORIES} from '../types';
const INITIAL_STATE = {favories: [], limit: 10, value: 0};
const favoriesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORIES:
      return {...state, value: ++state.value, limit: --state.limit};
    case REMOVE_FAVORIES:
      return {...state, value: --state.value, limit: ++state.limit};

    default:
      return state;
  }
};

export default favoriesReducers;
