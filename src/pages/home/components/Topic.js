import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem
} from '../style';

class Topic extends Component {
  render() {
    const { topicList } = this.props;
    return(
      <TopicWrapper>
        {
          topicList.map((topicItem, index) => {
            return <TopicItem key={topicItem.get('id')}>{topicItem.get('title')}</TopicItem>
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Topic);
