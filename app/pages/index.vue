<script setup lang="ts">
useHead({
  title: "Inicio",
});
</script>
<template>
  <NuxtLayout>
    <!--<template #actions>
      <NuxtLink to="/">
        <UButton icon="lucide:arrow-left" variant="ghost"> Atras </UButton>
      </NuxtLink>
    </template>-->
    <template #header>
      <h1 class="text-5xl">Inicio</h1>
      <p class="text-2xl">Inicio del sistema</p>
    </template>
    <div class="mt-10 flex flex-col justify-start align-start"></div>
  </NuxtLayout>
</template>
