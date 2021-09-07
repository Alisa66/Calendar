<template>
  <div class="container">
    <error-tip></error-tip>
    <div v-if="!errorCode">
      <card-list :data="yearData"></card-list>

    </div>
  </div>
</template>

<script>
import getData from '@/service';
import { getNowDate } from '@/lib/untils';

import CardList from '@/components/YearPage/List';
import ErrorTip from '@/components/ErrorTip'
import { useStore } from 'vuex';
import { computed, onMounted, watch } from 'vue';
export default {
  name:'YearPage',
  components:{  CardList,ErrorTip },
  setup(){
    const store = useStore(),
          state = store.state;

     onMounted(()=>{
       getData(store,'year',getNowDate('year'))
     });
     watch(()=>{
       return state.yearData
     },()=>{
       store.commit('setErrorCode',0)
     });
     return {
       yearData: computed(()=> state.yearData),
       errorCode: computed(()=> state.errorCode)
     }     
  }

}
</script>

<style>

</style>