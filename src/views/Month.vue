<!--
 * @Author: your name
 * @Date: 2021-09-01 10:01:04
 * @LastEditTime: 2021-09-06 16:02:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \calendars0.1\src\views\Month.vue
-->
<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list :data="monthData" />
    </div>
  </div>
</template>

<script>
import CardList from "@/components/MonthPage/List";
import ErrorTip from "@/components/ErrorTip";
import { useStore } from "vuex";
import { computed, onMounted ,watch} from "vue";
import getData from "@/service";
import { getNowDate } from "@/lib/untils";
export default {
  name: "MonthPage",
  components: { CardList, ErrorTip },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      // console.log(getNowDate('month'));
      getData(store, "month", getNowDate("month"));
    });

    watch(
      () => {
        return state.monthData;
      },
      () => {
        // console.log(state.monthData);

        store.commit("setErrorCode", 0);
      }
    );
    return {
      monthData: computed(() => state.monthData),
      errorCode: computed(() => state.errorCode),
    };
  },
};
</script>

<style></style>
