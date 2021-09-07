/*
 * @Author: your name
 * @Date: 2021-09-01 10:20:48
 * @LastEditTime: 2021-09-06 16:17:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\service\index.js
 */
import {getDayData, getMothData, getYearData} from './request';
import {formatChsDate, mapForChsDate} from '../lib/untils'

export default async(store,field,date)=>{
    let data = null;
    switch(field){
        case 'day':
            data = await getDayData(date);
            break;
        case 'month':
            data = await getMothData(date);
            break;
        case 'year':
            data = await getYearData(date);
            break;
            default:
                break;
    }

    if(data.error_code !== 0){
        store.commit('setErrorCode',data.error_code);
        return;
    }

    let res = null;
    switch(field){
        case 'day':
            res = data.result.data;
            res.date = formatChsDate(res.date,'day');
            res['year-month'] = formatChsDate(res['year-month'],'month')
            break;
        case 'month':
            res = data.result.data.holiday_array;
            res = mapForChsDate(res,'festival');
            break;
        case 'year':
            res = data.result.data.holiday_list;
            res = mapForChsDate(res,'startday');
    }

    store.commit('setData',{
        field,
        data:res
    })
}