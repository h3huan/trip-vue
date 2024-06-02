<script setup>
import tab from "@/components/tab/tab.vue";
import { ref } from "vue";

const val = ref(0);
</script>

<template>
  <div id="app">
    <router-view />

    <tab />
  </div>
</template>

<style scoped></style>
