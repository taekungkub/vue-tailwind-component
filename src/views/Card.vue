<template>
  <div>
    <base-page-header>Card</base-page-header>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div>
        <base-card
          title="Noteworthy technology acquisitions 2021"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        >
        </base-card>
      </div>

      <div>
        <base-card
          title="Noteworthy technology acquisitions 2021"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        >
          <template #footer> <div class="p-5 border-t">Custom Footer</div> </template>
        </base-card>
      </div>

      <div>
        <base-card
          title="Noteworthy technology acquisitions 2021"
          desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        >
          <template #header> <div class="p-5 border-t font-black text-lg">Custom Header</div> </template>

          <template #footer> <div></div> </template>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
