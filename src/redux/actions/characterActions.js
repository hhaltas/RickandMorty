import {
  GET_CHARACTER,
  CHARACTER_ERROR,
  GET_FILTERS,
  SET_SEARCH,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_ERROR,
  REMOVE_FILTERED,
} from '../types';
import axios from 'axios';
import {API, ApiCharacter} from '../../config/config';

export const getCharacter = () => async dispatch => {
  try {
    const res = await axios.get(API + ApiCharacter);
    //console.log('res',res.data)
    dispatch({
      type: GET_CHARACTER,
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: CHARACTER_ERROR,
      payload: console.log(e),
    });
  }
};

export const getCharFiltersAction =
  (searchName, searchType) => async (dispatch, getState) => {
    try {
      const res = await axios.get(API + ApiCharacter);
      //console.log('res', res.data);
      const filterArray = [];
      const filterdata = res.data.results.filter(function (element, index) {
        
        if (element.episode.toLowerCase().indexOf(searchName.toLowerCase()) >= 0) {
          filterArray.push(element);
        }
        return element.name.toLowerCase().indexOf(searchName);
      });
      // console.log('**', filterArray);
      dispatch({
        type: GET_CHARACTER,
        payload: filterArray,
      });
    } catch (e) {
      dispatch({
        type: CHARACTER_ERROR,
        payload: console.log(e),
      });
    }
  };

