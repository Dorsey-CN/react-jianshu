import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const homeInfoAction = (data) => {
  return {
    type: constants.CHANGE_HOME_INFO,
    articleList: data.articleList,
    recommendList: data.recommendList,
    topicList: data.topicList,
    writerList: data.writerList
  }
}

const moreArticleAction = (list) => {
  return {
    type: constants.ADD_MORE_ARTICLE,
    list: fromJS(list)
  }
}

export const changeHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        const result = res.data;
        if(result.success) {
          const action = homeInfoAction(result.data);
          dispatch(action);
        }
      })
      .catch(() => {
      });
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/articleList.json')
      .then((res) => {
        const result = res.data;
        if(result.success) {
          const action = moreArticleAction(result.data.articleList);
          dispatch(action);
        }
      })
      .catch(() => {
      });
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})
