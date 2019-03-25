import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RecommendItem
} from '../style';

class Recommend extends Component {
  render() {
    const { recommendList } = this.props;
    return(
      <div>
        {
          recommendList.map((recommendItem, index) => {
            return(
              <RecommendItem key={recommendItem.get('id')}>
                <img
                  className="img"
                  src={recommendItem.get('imgUrl')}
                  alt=""
                />
              </RecommendItem>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState, null)(Recommend);
