import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.span.attrs({
  href: ''
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 56px;
  padding-right: 70px;
  margin: 0 auto;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin-top: 9px;
  margin-left: 20px;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  type: 'text',
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  padding: 0 30px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 280px;
  }
  &.slide-enter {
    width: 200px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 280px;
  }
  &.slide-exit {
    width: 280px;
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 200px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 49px;
  left: 0;
  padding: 0 20px;
  width: 280px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  box-sizing: border-box;
`

export const SearchInfoTitle = styled.div`
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    margin-right: 5px;
    font-size: 12px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  clear: both;
  overflow: hidden;
`
export const SearchInfoItem = styled.a.attrs({
  href: ''
})`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
  color: #787878;
  text-decoration: none;
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  line-height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  margin-right: 20px;
  border: 1px solid #ec6149;
  font-size: 14px;
  border-radius: 19px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    background: #ec6149;
    color: #fff;
  }
`
