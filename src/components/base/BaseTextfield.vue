<template>
  <div class="mt-2">
    <label class="text-lg font-bold" for="">{{ props.label }}</label>
    <input
      :placeholder="props.placeholder"
      :type="props.type"
      class="mt-2 py-2.5 px-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full"
      :value="modelValue"
      @input="updateValue"
    />
    <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400" v-if="props.desc">
      {{ props.desc }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
  },
  required: {
    type: Boolean,
  },
  placeholder: {
    type: String,
  },
  desc: {
    type: String,
  },
});

const updateValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};

const value = ref("");
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
