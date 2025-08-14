<script setup lang="ts">
useHead({
  titleTemplate: (titleChunck) => {
    return titleChunck ? `${titleChunck} - MiauQuery` : "MiauQuery";
  },
});
</script>
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
