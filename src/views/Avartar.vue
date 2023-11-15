<template>
  <div>
    <base-page-header>Avatar</base-page-header>
    <div class="flex items-center gap-4 mt-8">
      <base-avatar size="small"> </base-avatar>
      <base-avatar>Tae</base-avatar>

      <base-avatar size="large">Tae</base-avatar>
    </div>

    <div class="flex items-center gap-4 mt-5">
      <base-avatar size="small"> </base-avatar>
      <base-avatar>Tae</base-avatar>

      <base-avatar size="large"> Tae </base-avatar>
    </div>

    <div class="flex items-center gap-4 mt-5">
      <base-avatar size="small" :count="1"> </base-avatar>
      <base-avatar :count="10">Tae</base-avatar>
      <base-avatar size="large" :count="123">Tae</base-avatar>
      <base-avatar> </base-avatar>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
