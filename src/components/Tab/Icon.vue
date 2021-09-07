<!--
 * @Author: your name
 * @Date: 2021-09-02 14:19:27
 * @LastEditTime: 2021-09-02 14:25:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\components\Tab\Icon.vue
-->

<template>
  <router-link :to="path" class="tab-icon">
      <i class="icon">{{iconText}}</i>
      <p  class="text">
          <slot>{{tabText}}</slot>
      </p>
  </router-link>

</template>

<script>
export default {
    name:'TabIcon',
    props:{
        iconText:String,
        path:String
    }
}
</script>

<style lang="scss" scoped>
.tab-icon{
    display: inline-block;
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: .25rem;
        height: .25rem;
        border-radius: 50%;
        background-color: #ddd;
        color: #999;
        font-size: .12rem;
        transform: all .5s;
    }
    .text{
        font-size: .12rem;
        text-align: center;
        margin-top: .02rem;
        color: #999;
        transform: color .5s;
    }
    &.router-link-active{
        .icon{
            background-color: #ed4040;
            color: #fff;
        }
        .text{
            color: #ed4040;
        }
    }
}
</style>