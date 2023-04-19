import {ADD_FAVORIES, REMOVE_FAVORIES} from '../types';

export const AddFavories = payload => ({type: ADD_FAVORIES, payload});
export const RemoveFavories = payload => ({type: REMOVE_FAVORIES, payload});
