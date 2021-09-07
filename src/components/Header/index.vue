<!--
 * @Author: your name
 * @Date: 2021-09-01 10:15:00
 * @LastEditTime: 2021-09-01 10:15:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\components\Header\index.vue
-->
<template>
  <header class="header">
      <h1>
          <slot></slot>
      </h1>
  </header>
  
</template>

<script>
export default {
    name:'MyHeader'

}
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: .44rem;
        background-color: #ed4040;
        text-align: center;
        line-height: .44rem;
        h1{
            font-size: .18rem;
            color: #fff;
        }
    }

</style>