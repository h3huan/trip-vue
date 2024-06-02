<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const val = ref(3);
const secVal = ref("");
const router = useRouter();
const clickCity = () => {
  router.push("/city");
};
// getCityAll().then((res) => {
//   console.log(res);
// });
</script>

<template>
  <div id="home">
    <h2>jeritroi</h2>
    <van-search v-model="secVal" placeholder="请输入搜索关键词" />

    <van-button type="primary" @click="clickCity">城市</van-button>

    <van-rate v-model="val" color="#7bb" />
  </div>
</template>

<style scoped></style>
