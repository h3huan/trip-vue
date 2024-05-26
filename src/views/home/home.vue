<script setup>
import { ref } from "vue";
const val = ref(3);
</script>

<template>
  <div id="home">
    <h2>jeritroi</h2>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-rate v-model="val" color="#7bb" />
  </div>
</template>

<style scoped></style>
