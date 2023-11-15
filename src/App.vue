<template>
  <div>
    <TheHeader></TheHeader>
    <div class="wrapper transition duration-200">
      <aside>
        <TheSidebar></TheSidebar>
      </aside>
      <main class="wrapper-inner">
        <div class="container">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./layout/TheHeader.vue"
import TheSidebar from "./layout/TheSidebar.vue"
</script>

<style scoped lang="scss">
.wrapper {
  @apply transition-all duration-300 flex pl-0 lg:pl-[260px];
}

.wrapper-inner {
  @apply mt-20 w-full;
}
</style>
