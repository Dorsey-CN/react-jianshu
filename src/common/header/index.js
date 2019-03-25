import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';
import { actionCreators } from './store';

class Header extends Component {
  getListArea () {
    const { focused, searchList, totalPage, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const pageList = [];
    const newList = searchList.toJS();
    if (newList.length > 0) {
      for(let i = (page - 1) * 10;i < page * 10;i++) {
        let infoItem = newList[i];
        if(infoItem) pageList.push(<SearchInfoItem key={infoItem}>{infoItem}</SearchInfoItem>)
      }
    }

    if(focused || mouseIn) {
      return(
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}
            >
              <i className="iconfont spin" ref={(icon) => {this.spinIcon = icon}}>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, searchList, handleInputFoucs, handleInputBlur } = this.props;
    return(
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => {handleInputFoucs(searchList)}}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe96a;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchList: state.getIn(['header', 'searchList']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    page: state.getIn(['header', 'page'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFoucs(list) {
      console.log(list);
      (list.size === 0) && dispatch(actionCreators.getSearchList());
      dispatch(actionCreators.searchFocused());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spinIcon) {
      let rotateDeg = spinIcon.style.transform.replace(/[^0-9]/ig, '');
      if(rotateDeg) {
        rotateDeg = parseInt(rotateDeg, 10);
      } else {
        rotateDeg = 0;
      }
      spinIcon.style.transform = `rotate(${rotateDeg + 360}deg)`;
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
