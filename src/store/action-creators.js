import {INIT_LIST_ACTION} from './action-types';
import axios from 'axios';

export const getInitList = (list) => ({
  type: INIT_LIST_ACTION,
  list
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/list')
      .then((res) => {
        const action = getInitList(res.data);
        dispatch(action);
      });
  }
}
