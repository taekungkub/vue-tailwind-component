<template>
  <div>
    <base-page-header>Button</base-page-header>
    <div class="flex items-center gap-4 mt-8">
      <base-button sm>Small</base-button>
      <base-button>Base</base-button>
      <base-button lg>large</base-button>
    </div>
    <br />
    <div class="flex items-center gap-4">
      <base-button sm pills>Small</base-button>
      <base-button pills>Base</base-button>
      <base-button lg pills>large</base-button>
    </div>

    <br />
    <div class="flex flex-wrap items-center gap-4">
      <base-button primary>Primary</base-button>
      <base-button warning>Warning</base-button>
      <base-button danger>Danger</base-button>
      <base-button link>Link</base-button>
    </div>

    <br />
    <div class="flex items-center gap-4">
      <base-button primary disabled>Disabled</base-button>
      <base-button primary>Enable</base-button>
    </div>

    <br />

    <base-button primary block>Block</base-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
