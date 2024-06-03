import { getCityAll } from "@/services/modules/city";
import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    statiCity: {
      cityName: "里斯本",
    },
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCities = res.data;
    },
  },
});

export default useCityStore;
