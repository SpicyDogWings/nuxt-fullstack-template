<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.preference === "dark",
  set: (value: boolean) => {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <USwitch
    v-model="isDark"
    unchecked-icon="lucide:sun"
    checked-icon="lucide:moon"
    class="color-white"
  />
</template>
