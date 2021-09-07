/*
 * @Author: your name
 * @Date: 2021-09-01 10:09:50
 * @LastEditTime: 2021-09-01 10:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\assets\js\common.js
 */
import FastClick from "./fastclick"

document.documentElement.style.fontSize = document.documentElement.clientWidth /3.75 +'px';
window.addEventListener('load',function(){
    FastClick.attach(document.body)
},false)

document.documentElement.addEventListener('touchmove',function(e){
    if(e.target.length>1){
        e.preventDefault()
    }
})