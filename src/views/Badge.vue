<template>
  <div>
    <base-page-header>Badge</base-page-header>
    <div class="flex gap-4 items-center mt-8">
      <base-badge primary>Primary</base-badge>
      <base-badge danger>Danger</base-badge>
      <base-badge warning>Warning</base-badge>
      <base-badge link>Link</base-badge>
      <base-badge icon primary>
        <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Icon description</span></base-badge
      >
    </div>
    <br />
    <div class="flex gap-4 items-center">
      <base-badge sm primary>Primary</base-badge>
      <base-badge primary>Danger</base-badge>
      <base-badge lg primary>Warning</base-badge>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
