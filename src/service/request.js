/*
 * @Author: your name
 * @Date: 2021-09-01 10:20:56
 * @LastEditTime: 2021-09-06 11:26:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\service\request.js
 */
import { axiosPost } from "../lib/http";
function getDayData(date) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/day",
      data: { date },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}
function getMothData(yearMonth) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: "/api/calendar/month",
      data: {
        "year-month": yearMonth,
      },
      success(data) {
        resolve(data);
      },
      error(err) {
        reject(err);
      },
    });
  });
}

function getYearData(year) {
  return new Promise((reslove, reject) => {
    axiosPost({
      url: "/api/calendar/year",
      data: { year },
      success(data) {
        reslove(data);
      },
      error(data) {
        reject(data);
      },
    });
  });
}

export { getDayData, getMothData, getYearData };
