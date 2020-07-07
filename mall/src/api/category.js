import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

const CancelToken = axios.CancelToken;
let cancel;

// 获取内容数据--ajax
export const getCategoryContent = (id) => {
  cancel && cancel('取消了前次请求！');
  cancel = null;
  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: TIMEOUT,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c;
    })
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data.content;
    }
    throw new Error('获取数据失败！');
  }).catch(err => {
    if (axios.isCancel(err)) {
      console.log(err);
    } else {
      console.log(err);
    }
  });
};
