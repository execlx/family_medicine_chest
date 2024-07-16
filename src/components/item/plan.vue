<template>
  <div class="flex flex-row p-4 bg-slate-300">
    <div class="w-5">
      <nut-avatar size="normal">
        <img :src="url" />
      </nut-avatar>
    </div>
    <div class="flex-1">
      <nut-collapse v-model="val" @change="change">
        <nut-collapse-item name="name1" title="Title 1">
          <template #extra> Extra Content </template> Content 1
        </nut-collapse-item>
      </nut-collapse>
    </div>
    <div class="bg-red-500">fff</div>

    <!-- <nut-cell
        size="large"
        title="服药计划 1"
        sub-title=" 药品信息"
        desc="用法药量"
      >
        <template #icon>
          <My />
        </template>
        <template #link>
          <nut-switch v-model="checked" />
        </template>
      </nut-cell> -->
  </div>
</template>

<script setup lang="ts">
import { My } from "@nutui/icons-vue-taro";
import { ref } from "vue";
const url =
  "https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png";
const val = ref(["name2", "name3"]);
const change = (modelValue: string[], name: string, status: boolean) => {
  console.log(modelValue, name, status);
};
</script>

<style scoped></style>
