import { defineStore } from "pinia";
import { SettingTy } from "../typing/common";

export const useSettingStore = defineStore({
  id: "setting",
  state: () => ({
    showSidebar:false,
  }),

  actions: {
    onToggleSidebar(status:boolean) {
      this.$patch({
        showSidebar:status
      })
    },
  },
  getters: {},
});
