<template>
  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    <slot name="header"></slot>
    <div class="font-black text-lg">
      <div>
        <slot>
          <img :src="props.image" alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ props.title }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{ props.desc }}</p>
          </div>
        </slot>
      </div>
      <slot name="footer">
        <div class="border-t flex gap-3 p-5">
          <base-button primary>Read more</base-button>
          <base-button link>Link</base-button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    default: "https://flowbite.com/docs/images/blog/image-1.jpg",
  },
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
});
</script>

<style scoped></style>
