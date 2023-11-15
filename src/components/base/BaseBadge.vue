<template>
  <div
    :class="['inline-flex text-center align-middle whitespace-nowrap select-none text-xs font-bold transition duration-300 ease-in-out', theme, rounded, width]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  danger: {
    type: Boolean,
    default: false,
  },
  warning: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },

  pills: {
    type: Boolean,
    default: false,
  },
  sm: {
    type: Boolean,
    default: false,
  },
  lg: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
});

const width = computed(() => {
  if (props.sm) return "py-1 px-3";
  else if (props.lg) return "py-2.5 px-5";
  else if (props.icon) return "p-2 ";
  else return "py-2 px-3.5";
});

const rounded = computed(() => {
  if (props.pills) return "rounded-full";
  else return "rounded-lg";
});

const theme = computed(() => {
  if (props.primary) return "bg-green-100 text-green-800 ";
  else if (props.warning) return "bg-yellow-100 text-yellow-800";
  else if (props.danger) return "bg-red-100 text-red-800 ";
  else if (props.link) return "bg-blue-100 hover:bg-blue-200 text-blue-800 hover:blue-500 cursor-pointer ";
  else return "bg-green-100 text-green-800 ";
});
</script>

<style scoped></style>
