import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeSearchList = (list) => ({
  type: constants.GET_SEARCH_LIST,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const searchFocused = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page: page + 1
});

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/getSearchList.json')
      .then((res) => {
        const data = res.data.data;
        dispatch(changeSearchList(data));
      })
      .catch(() => {
        console.log('error');
      })
  }
}
