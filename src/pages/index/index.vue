<template>
  <div class="container h-screen flex flex-col">
    <!-- Main Content -->
    <div class="text-center flex-1 bg-gray-100">
      
      <component :is="currentComponent" />
    </div>

    <!-- Tabbar -->
    <nut-tabbar v-model="active" @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="服药计划">
        <template #icon>
          <Home />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="药箱管理">
        <template #icon>
          <Category />
        </template>
      </nut-tabbar-item>
      <nut-tabbar-item tab-title="个人中心">
        <template #icon>
          <My />
        </template>
      </nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Home, Category, My } from "@nutui/icons-vue-taro";

import HomePage from '../../components/home.vue';
import MedicinePage from '../../components/manage.vue';
import MinePage from '../../components/mine.vue';

const active = ref(0);

const components = [HomePage, MedicinePage, MinePage];

const currentComponent = computed(() => components[active.value]);

const tabSwitch = (item, index) => {
  active.value = index;
};
</script>

<style>
.container {
  --nut-button-primary-background-color: green;
  --nut-tabbar-word-margin-top: 12px;
}
</style>
