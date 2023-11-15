<template>
  <button
    type="button"
    :class="[
      'inline-block text-center text-white shadow cursor-pointer align-middle	whitespace-nowrap  select-none	text-sm font-bold hover:opacity-75 transition duration-300 ease-in-out hover:-translate-y-1',
      theme,
      width,
      rounded,
      {
        '!cursor-not-allowed bg-opacity-50': props.disabled,
        'w-full': props.block,
      },
    ]"
  >
    <slot></slot>
  </button>
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
  light: {
    type: Boolean,
    default: false,
  },
  block: {
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
  disabled: {
    type: Boolean,
    default: false,
  },
});

const width = computed(() => {
  if (props.sm) return "py-1 px-3";
  else if (props.lg) return "py-2.5 px-8";
  else return "py-2 px-5";
});

const rounded = computed(() => {
  if (props.pills) return "rounded-full";
  else return "rounded-lg";
});

const theme = computed(() => {
  if (props.primary) return "bg-primary";
  else if (props.warning) return "bg-warning";
  else if (props.danger) return "bg-danger";
  else if (props.link) return "bg-transparent text-primary";
  else if (props.light) return "bg-gray-100 text-gray-500";
  else return "bg-primary";
});
</script>

<style scoped></style>
