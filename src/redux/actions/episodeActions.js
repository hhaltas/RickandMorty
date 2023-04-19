import {GET_EPISODE, EPISODE_ERROR} from '../types';
import axios from 'axios';
import {API, ApiEpisode} from '../../config/config';

export const getEpisode = () => async dispatch => {
  try {
    const res = await axios.get(API + ApiEpisode);
    //console.log('res',res.data)
    dispatch({
      type: GET_EPISODE,
      payload: res.data.results,
    });
  } catch (e) {
    dispatch({
      type: EPISODE_ERROR,
      payload: console.log(e),
    });
  }
};

export const getEpisodeFiltersAction =
  (searchName, searchType) => async (dispatch, getState) => {
    try {
      const res = await axios.get(API + ApiEpisode);
      const filterArray = [];
      const filterdata = res.data.results.filter(function (element, index) {
        if (
          element.episode.toLowerCase().indexOf(searchName.toLowerCase()) >=
            0 ||
          element.name.toLowerCase().indexOf(searchName.toLowerCase()) >= 0
        ) {
          filterArray.push(element);
        }
        return element.episode.toLowerCase().indexOf(searchName);
      });
      console.log('**', filterArray);
      dispatch({
        type: GET_EPISODE,
        payload: filterArray,
      });
    } catch (e) {
      dispatch({
        type: EPISODE_ERROR,
        payload: console.log(e),
      });
    }
  };
