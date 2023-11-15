<template>
  <div class="relative">
    <div class="inline-flex rounded-full bg-gray-100 overflow-hidden text-center items-center justify-center" :class="[width]">
      <span
        v-if="props.count"
        class="absolute top-0 -right-1 transform -translate-y-1/2 h-7 w-7 text-[10px] text-white font-bold bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"
        >{{ props.count }}</span
      >

      <slot>
        <div v-if="props.src" class="h-full">
          <img :src="props.src" class="w-full h-full block mx-auto" alt="" />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    validator: (v: string) => ["small", "large"].includes(v),
  },
  src: {
    type: String,
  },
  count: {
    type: Number,
  },
  avatar: {
    type: Boolean,
  },
});

const width = computed(() => {
  if (props.size === "small") return "h-10 w-10";
  else if (props.size === "large") return "h-16 w-16";
  else return "h-14 w-14";
});
</script>

<style scoped></style>
