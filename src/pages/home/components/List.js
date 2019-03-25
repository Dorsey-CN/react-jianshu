import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import { actionCreators } from '../store';

class List extends Component {
  render() {
    const { articleList, getMoreList } = this.props;
    return(
      <div>
        {
          articleList.map((articleItem, index) => {
            return (
              <ListItem key={articleItem.get('id')}>
                <img
                  className="pic"
                  src={articleItem.get('imgUrl')}
                  alt="listImg"
                />
                <ListInfo>
                  <Link to="/detail">
                    <h3 className="title">{articleItem.get('title')}</h3>
                  </Link>
                  <p className="desc">{articleItem.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMoreList: () => {
      dispatch(actionCreators.getMoreList());
    }
  }
}

export default connect(mapState, mapDispatch)(List);
