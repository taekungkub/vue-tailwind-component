<template>
  <div>
    <base-page-header>Form</base-page-header>
    <div class="mt-8">
      <base-textfield label="Username"></base-textfield>
      <base-textfield label="Password" type="password"></base-textfield>
      <base-textfield label="Tel"></base-textfield>
      <base-textfield label="Age" type="number"></base-textfield>
      <base-textfield label="Firstname"></base-textfield>
      <base-textfield label="Lastname" placeholder="Lastname"></base-textfield>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped></style>
