import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterTitle,
  WriterSwitch,
  WriterItem,
  WriterInfo
} from '../style';

class Writer extends Component {
  render() {
    return(
      <WriterWrapper>
        <WriterTitle>
          <span className="title">推荐作者</span>
          <WriterSwitch>
            <i className="iconfont spin">&#xe851;</i>
            换一批
          </WriterSwitch>
        </WriterTitle>
        {this.getWriterList()}
      </WriterWrapper>
    )
  }

  getWriterList() {
    const { writerList } = this.props;
    return (
      writerList.map((item) => {
        return(
          <WriterItem key={item.get('id')}>
            <img
              className="avatar"
              src={item.get('avatar')}
              alt="avatar"
            />
            <WriterInfo>
              <p className="name">{item.get('name')}</p>
              <p className="info">{item.get('info')}</p>
            </WriterInfo>
            <span className="attention">关注</span>
          </WriterItem>
        )
      })
    )
  }
}

const mapState = (state) => {
  return {
    writerList: state.getIn(['home', 'writerList'])
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Writer);
