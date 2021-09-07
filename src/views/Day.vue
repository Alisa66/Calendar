<!--
 * @Author: your name
 * @Date: 2021-09-01 11:18:46
 * @LastEditTime: 2021-09-06 15:36:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\views\Day.vue
-->
<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <day-card :data="dayData" />
      <day-list :data="dayData"/>
    </div>
  
  </div>
</template>

<script>
import getData from '@/service'
import  DayCard  from '@/components/DayPage/Card'
import  DayList  from '@/components/DayPage/List'
import ErrorTip from '@/components/ErrorTip'
import { useStore } from 'vuex'
import { computed, onMounted,watch } from 'vue'

import {getNowDate } from '@/lib/untils'
export default {
  name:'Day',
  components:{DayCard,DayList ,ErrorTip},
  setup(){
     const store = useStore(),
           state = store.state;
    onMounted(()=>{
      // console.log(getNowDate('day'))
      getData(store,'day',getNowDate('day'));
      
    })     
    watch(()=> {
       return state.dayData
    },()=>{
      // console.log(state.dayData);
      store.commit('setErrorCode',0)
    })
    // console.log(computed(()=> state.errorCode));
    return {
       dayData:computed (()=> state.dayData),
       errorCode: computed(()=> state.errorCode)
    }
  }
}
</script>

<style>

</style>
