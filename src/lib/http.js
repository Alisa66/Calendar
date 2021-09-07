/*
 * @Author: your name
 * @Date: 2021-09-01 10:21:45
 * @LastEditTime: 2021-09-06 11:09:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\lib\http.js
 */
import axios from 'axios';
import qs from 'qs';

import { JUHE_APPKEY } from '../config/keys'; // 请求接口需要传递的参数

function axiosPost(options) {
    axios({
        url:options.url,
        method:'post',
        header:{
            "Content-Type":'application/x-www-form-urlencoded'
        },
        data:qs.stringify({
            ...options.data,
            key:JUHE_APPKEY
        })
    }).then((res)=> {
        options.success(res.data)
    }).catch(e => {
        options.error(e)
    })
}

function axiosGet(options){
    axios(options.url+"&key="+JUHE_APPKEY)
        .then(res => {
            options.success(res.data)
        })
        .catch(e =>{
            options.error(e)
        })
}
export{
    axiosGet,
    axiosPost
}