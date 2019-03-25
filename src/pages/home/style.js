import styled from 'styled-components';

export const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  float: left;
  padding-top: 30px;
  margin-left: 15px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const TopicWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
`
export const TopicItem = styled.div`
  float: left;
  padding: 0 10px;
  margin-right: 15px;
  line-height: 32px;
  height: 32px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
`
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const LoadMore = styled.div`
  line-height: 40px;
  height: 40px;
  width: 100%;
  margin: 30px 0;
  text-align: center;
  border-radius: 20px;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`
export const HomeRight = styled.div`
  float: right;
  padding-top: 30px;
  width: 260px;
`
export const RecommendItem = styled.a.attrs({
  href: ''
})`
  display: block;
  width: 100%；
  height: 50px;
  margin-bottom: 5px;
  .img{
    width: 100%;
    height: 100%;
  }
`
export const WriterWrapper = styled.div`
  margin-top: 20px;
`
export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
  overflow: hidden;
  .title {
    float: left;
  }
`
export const WriterSwitch = styled.div`
  float: right;
  cursor: pointer;
  .spin {
    margin-right: 3px;
    font-size: 12px;
  }
`
export const WriterItem = styled.div`
  margin-top: 15px;
  overflow: hidden;
  .avatar {
    float: left;
    display: block;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .attention {
    float: right;
    margin-top: 10px;
    font-size: 13px;
    color: #42c02e;
  }
`
export const WriterInfo = styled.div`
  float: left;
  margin-top: 10px;
  .name {
    font-size: 14px;
  }
  .info {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  line-height: 60px;
  height: 60px;
  width: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`
