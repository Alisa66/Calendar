<!--
 * @Author: your name
 * @Date: 2021-09-01 10:01:04
 * @LastEditTime: 2021-09-07 10:24:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\App.vue
-->

<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input :placeholder="placeholder" :maxlength="maxlength" />

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <tab />
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Tab from "@/components/Tab";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    MyHeader,
    Tab,
    SearchInput,
  },
  setup() {
    const router = useRouter(),
      store = useStore(),
      state = store.state;
    router.push("/");
    store.commit("setPlaceholder", "day");
    watch(
      () => {
        return router.currentRoute.value.name; // 第一个函数返回的 给第二个函数使用
      },
      (value) => {
        //  console.log("value",value);
        store.commit("setHeaderTitle", value);
        store.commit("setPlaceholder", value);
        store.commit("setMaxlength", value);
        store.commit("setField", value);
        store.commit("setErrorCode", 0);
      }
    );
    return computed(() => state).value; // {}
  },
};
</script>
