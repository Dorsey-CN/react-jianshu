// import * as constants from './constants';
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  showScroll: false
});

const changeHomeInfo = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList)
  });
}

const addMoreArticle = (state, action) => {
  return state.set('articleList', state.get('articleList').concat(action.list));
}

const toggleScrollTop = (state, action) => {
  return state.set('showScroll', action.show);
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_INFO:
      return changeHomeInfo(state, action);
    case constants.ADD_MORE_ARTICLE:
      return addMoreArticle(state, action);
    case constants.TOGGLE_SCROLL_TOP:
      return toggleScrollTop(state, action);
    default:
      return state;
  }
}