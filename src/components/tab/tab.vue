<script setup>
import tabData from "@/assets/data/tab.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const getAssetURL = (image) => {
  return new URL(`../../assets/${image}`, import.meta.url).href;
};

const currentIndex = ref(0);
const router = useRouter();
const itemClick = (index, item) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<template>
  <div class="tab">
    <template v-for="(item, index) in tabData">
      <div
        class="tab-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(item.image)"
          alt=""
        />
        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        <span class="test"> {{ item.test }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid rgb(137, 143, 148);
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.active {
    color: rgb(195, 127, 44);
  }
}

img {
  height: 22px;
}

.test {
  font-size: 12px;
}
</style>
