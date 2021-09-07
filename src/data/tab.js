/*
 * @Author: your name
 * @Date: 2021-09-02 14:35:52
 * @LastEditTime: 2021-09-02 15:45:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\data\tab.js
 */

import {getIconDate} from '@/lib/untils';

export default [{
        iconText:getIconDate('day'),
        tabText:'当天',
        path:'/'
    },
    {
        iconText:getIconDate('month'),
        tabText:'近期',
        path:'/month'
    },
    {
        iconText:getIconDate('year'),
        tabText:'当前',
        path:'/year'
    }]

