<template>
  <div class="flex">
    <div class="flex-1">
      <nut-noticebar
        direction="vertical"
        :list="list"
        :speed="10"
        :stand-time="2000"
        @click="handleClick"
      />
      <nut-menu active-color="green">
        <nut-menu-item v-model="val1" :options="options1" />
        <nut-menu-item v-model="val2" :options="options2" />
      </nut-menu>
      <div class="rounded-lg">
        <PlanItem></PlanItem> 
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import PlanItem from './item/plan.vue';
const val1 = ref(0);
const val2 = ref("a");
const checked = ref(true);

const options1 = ref([
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
]);

const options2 = ref([
  { text: "默认排序", value: "a" },
  { text: "好评排序", value: "b" },
  { text: "销量排序", value: "c" },
]);

const list = ref(['Radio 单选框', 'Checkbox 复选框', 'DatePicker 日期选择器', 'CalendarCard 日历卡片']);
const handleClick = (item) => {
  console.log(item);
};
</script>

<style scoped></style>
