<script setup lang="ts">
import { computed } from 'vue';
import { useColorMode } from '#imports';

const colorMode = useColorMode();
const isDark = computed({
  get: () => colorMode.preference === 'dark',
  set: (value: boolean) => {
    colorMode.preference = value ? 'dark' : 'light';
  },
});
</script>

<template>
  <ClientOnly>
    <USwitch
      v-model="isDark"
      unchecked-icon="lucide:sun"
      checked-icon="lucide:moon"
    />
  </ClientOnly>
</template>
