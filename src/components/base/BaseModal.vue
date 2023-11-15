<template>
  <transition name="modal">
    <div class="modal-mask" v-if="isModel">
      <div class="modal-wrapper" @click="clickOutSide()">
        <div class="modal-container" :class="[maxWidth, { active: isActive }]" @click.stop>
          <div class="modal-header" v-if="!props.hideHeader">
            <div class="title">{{ props.title }}</div>
            <div class="title">{{ props.titleCenter }}</div>
            <div @click="close" class="text-2xl hover:text-gray-600 cursor-pointer">
              <span v-if="!props.noClose && !props.loading">&#215;</span>
            </div>
          </div>
          <div class="modal-body">
            <div class="font-bold text-2xl text-center pt-4 mb-2" v-if="props.hideHeader">
              {{ props.title }}
            </div>
            <slot> <p class="text-gray-800">Are you sure you want you delete your account? This action cannot be undone.</p> </slot>
          </div>
          <div class="modal-footer" v-if="!props.hideFooter">
            <slot name="footer">
              <div class="with-confirm">
                <div class="text-right mt-4">
                  <base-button light @click="close" class="mr-2">Cancel</base-button>
                  <base-button primary @click="emit('onConfirm')"> Confirm </base-button>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  titleCenter: {
    type: String,
    default: "",
  },
  noClose: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  static: {
    type: Boolean,
    default: false,
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "sm",
    validator: (value: string) => ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  withConfirm: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "onAfterClose", "onConfirm"]);

const isActive = ref(false);
const isModel = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit("update:modelValue", value);
  },
});

const maxWidth = computed(() => {
  switch (props.width) {
    case "xs":
      return "max-w-lg";
    case "sm":
      return "max-w-xl";
    case "md":
      return "max-w-2xl";
    case "lg":
      return "max-w-3xl";
    case "full":
      return "max-w-full";
  }
});

function close() {
  isModel.value = false;
  emit("onAfterClose");
}

function clickOutSide() {
  if (props.loading || props.static) {
    if (!isActive.value) {
      isActive.value = true;
    }

    setTimeout(() => {
      isActive.value = false;
    }, 300);
    return;
  }

  close();
}
</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed !important;
  z-index: 1000 !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  @apply p-5;
}

.modal-container {
  @apply mx-auto rounded-xl shadow bg-gray-50  transition duration-300;
}

.modal-container.active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.modal-header {
  @apply flex  justify-between items-center py-5 px-5 bg-gray-100 leading-none border-b select-none rounded-t-xl;

  .title {
    @apply font-bold text-xl;
  }
}

.modal-body {
  @apply py-5 px-5;
}

.modal-footer {
  @apply pb-5 px-5;
}

.with-confirm {
  @apply flex items-center justify-start flex-nowrap;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
