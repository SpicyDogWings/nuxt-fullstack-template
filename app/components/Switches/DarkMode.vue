<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.preference === "dark",
  set: (value: boolean) => {
    if (value && colorMode.value === 'dark') {
      colorMode.preference = "system";
    } else {
      colorMode.preference = value ? "dark" : "light";
    }
  },
});
</script>

<template>
  <USwitch
    v-model="isDark"
    unchecked-icon="lucide:sun"
    checked-icon="lucide:moon"
  />
</template>
