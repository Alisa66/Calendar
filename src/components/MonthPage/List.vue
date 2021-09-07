<!--
 * @Author: your name
 * @Date: 2021-09-06 15:40:05
 * @LastEditTime: 2021-09-06 15:48:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\components\MonthPage\List.vue
-->
<template>
  <div class="list-wrapper">
      <ul class="holiday-list">
          <card-item
           v-for="(item,index) of data"
           :key="index"
           :item="item"
          />

      </ul>
  </div>
</template>

<script>
import CardItem from './Item.vue'
export default {
    name:'CardList',
    components:{CardItem},
    props:{
        data:Array
    }

}
</script>

<style>

</style>