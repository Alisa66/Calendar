<!--
 * @Author: your name
 * @Date: 2021-09-03 17:47:02
 * @LastEditTime: 2021-09-06 09:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\components\DayPage\List\index.vue
-->
<template>
  
  <div class="day-list">
      <list-item
        title='今年属相'
        :content="data.animalsYear"
      />
  <list-item
        title='农历年份'
        :content="data.lunarYear"
      />
      <list-item
        title='适宜事件'
        :content="data.suit"
      />
        <list-item
        title='避免事件'
        :content="data.avoid"
      />
  </div>
</template>


<script>
import ListItem from './item.vue'
export default {
  name:'DayList',
  props:{
      data:Object
  },
  components:{
      ListItem
  }

}
</script>

<style>

</style>