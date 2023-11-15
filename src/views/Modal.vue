<template>
  <div>
    <base-page-header>Modal</base-page-header>
    <div class="mt-8">
      <div class="flex gap-4 items-center flex-wrap">
        <base-button primary @click="modalBasic = true">Modal Basic</base-button>

        <base-button primary @click="modalHideHeader = true">Hide Header</base-button>
        <base-button primary @click="modalCustomFooter = true">Custom Footer</base-button>

        <base-button primary @click="modalLock = true">Lock Modal</base-button>
      </div>
    </div>

    <BaseModal v-model="modalBasic" title="Title">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of
      service agreements to comply. The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of
      data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </BaseModal>
    <BaseModal v-model="modalHideHeader" title="Title" hideHeader> </BaseModal>
    <BaseModal v-model="modalCustomFooter" title="Title">
      <template #footer>
        <div class="flex items-center gap-3 justify-center w-full">
          <base-button light @click="modalCustomFooter = false">Cancel</base-button>
          <base-button danger @click="modalCustomFooter = false"> Yes I'm sure. </base-button>
        </div>
      </template>
    </BaseModal>

    <BaseModal v-model="modalLock" title="Title" static>
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of
      service agreements to comply. The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of
      data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const modalBasic = ref(false)
const modalHideHeader = ref(false)
const modalCustomFooter = ref(false)
const modalLock = ref(false)
</script>

<style scoped></style>
