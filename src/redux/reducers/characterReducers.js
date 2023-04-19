import {GET_CHARACTER, CHARACTER_ERROR} from '../types';

const initialState = {
  character: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
        loading: false,
      };
    case CHARACTER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
