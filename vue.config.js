/*
 * @Author: your name
 * @Date: 2021-09-06 10:10:28
 * @LastEditTime: 2021-09-06 13:26:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\vue.config.js
 */

module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: {
        "/api": {
          target: "http://v.juhe.cn/",
          changeOrigin: true,
          ws:true,
          secure:false,
          pathRewrite:{
              "^/api/":""
          }
        }
      }
  },
  lintOnSave: false,
};
