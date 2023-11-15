<template>
  <div>
    <div class="menu-item" :class="[itemActive, props.dropdownOpen ? '' : 'my-6']" @click="$emit('toggle')">
      <div class="flex items-center justify-center">
        <slot name="icon-start"> </slot>
      </div>

      <div class="flex items-center justify-between col-span-5">
        <p class="text-base font-bold">
          <slot></slot>
        </p>
        <slot name="icon-end">
          <div v-if="props.hasDropdown">
            <IconUp v-if="props.dropdownOpen" />
            <IconDown v-if="!props.dropdownOpen" />
          </div>
        </slot>
      </div>
    </div>

    <div class="bg-green-50" v-if="props.dropdownOpen">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import IconUp from "./icon/IconUp.vue";
import IconDown from "./icon/IconDown.vue";

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  hasDropdown: {
    type: Boolean,
    default: false,
  },
  dropdownOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle"]);

const itemActive = computed(() => {
  if (props.active) {
    return "active";
  }
  return "";
});
</script>

<style scoped lang="scss">
.menu-item {
  @apply border-l-4 border-transparent grid grid-cols-6 gap-3 w-full pl-5 pr-3 py-1 cursor-pointer  select-none transition duration-300 hover:text-green-400;
}

.menu-item.active {
  @apply border-l-4 border-green-400 text-green-400;
}
</style>
