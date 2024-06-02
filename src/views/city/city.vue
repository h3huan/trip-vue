<script setup>
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { Search } from "vant";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
// import { getCityAll } from "@/services/modules/city";

const router = useRouter();
const searchVal = ref("");
const cancelClick = () => {
  router.back();
};

const tabActive = ref();

const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<template>
  <div id="city">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="重返讨论死亡"
        @search="Search"
        @cancel="cancelClick"
      />
    </form>
    <van-tabs v-model:active="tabActive" color="#ff1212">
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"> </van-tab>
      </template>
    </van-tabs>
    <van-index-bar>
      <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>

    <!-- <div class="content">
      <template v-for="(group, index) in currentGroup?.cities" :key="index">
        <div class="group-item">
          <h2 class="title">标题：{{ group.group }}</h2>
          <div class="list">
            <template v-for="(city, indey) in group.cities" :key="indey">
              <div class="city">{{ city.cityName }}</div>
            </template>
          </div>
        </div>
      </template>
    </div> -->
  </div>
</template>

<style scoped></style>
