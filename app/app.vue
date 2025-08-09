<script setup lang="ts">
useHead({
  titleTemplate: (titleChunck) => {
    return titleChunck ? `${titleChunck} - Sistema` : "Sistema";
  },
});
</script>
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
