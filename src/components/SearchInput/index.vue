<!--
 * @Author: your name
 * @Date: 2021-09-01 10:15:46
 * @LastEditTime: 2021-09-07 11:08:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\components\SearchInput\index.vue
-->

<template>
  <div class="search-wrap">
    <input
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @input="searchData($event)"
    />
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import getData from "@/service";
import { formatUserDate, getNowDate } from "@/lib/untils";
export default {
  name: "SearchInput",
  props: {
    placeholder: String,
    maxlength: Number,
  },
  setup(props) {
      // setup里面用props来接收传递过来的参数值
    // console.log(props);

    const inputValue = ref(""),
      store = useStore(),
      state = store.state;
   
    
    const searchData = (e) => {
      inputValue.value = e.target.value;
    //   console.log(props.maxlength);
      const field = computed(() => state.field).value;

      if (inputValue.value.length === props.maxlength) {

        getData(store, field, formatUserDate(inputValue.value));
        // console.log(formatUserDate(inputValue.value));

      } else if (inputValue.value.length === 0) {

        getData(store, field, getNowDate(field));

      }
    };

    watch(
      () => {
        return state.field;
      },
      () => {
        inputValue.value = "";
      }
    );
    return {
      inputValue,
      searchData,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-wrap {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  padding: 0.03rem 0.1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  input {
    width: 100%;
    height: 100%;
    font-size: 0.14rem;
    border: 1px solid #ddd;
    text-indent: 0.1rem;
    border-radius: 0.03rem;
  }
  &:focus {
    border-color: #ed4040;
    box-shadow: 0 0 0.02rem #ed4040;
    transition: all 0.3s;
  }
}
</style>
