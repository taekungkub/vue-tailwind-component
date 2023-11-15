<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-first">
        <ButtonCollpseSidebar @toggle="setting.onToggleSidebar((setting.showSidebar = !setting.showSidebar))" />
        <div class="nav-logo">GOGO</div>
      </div>
      <div class="nav-content"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSettingStore } from "../store/setting";
import ButtonCollpseSidebar from "../components/ButtonCollpseSidebar.vue";

const setting = useSettingStore();
</script>

<style scoped lang="scss">
.navbar {
  -webkit-box-shadow: 0 3px 9px rgb(0 0 0 / 6%);
  box-shadow: 0 3px 9px rgb(0 0 0 / 6%);
  z-index: 6;
  @apply bg-white fixed w-full;
}

.nav-container {
  padding: 0 30px;
  @apply flex items-center justify-between h-[68px];
}

.nav-first {
  @apply flex items-center gap-4;
}

.nav-logo {
  @apply font-black text-xl;
}
</style>
