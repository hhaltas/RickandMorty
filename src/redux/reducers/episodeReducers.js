import {GET_EPISODE, EPISODE_ERROR} from '../types';

const initialState = {
  episode: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EPISODE:
      return {
        ...state,
        episode: action.payload,
        loading: false,
      };
    case EPISODE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
