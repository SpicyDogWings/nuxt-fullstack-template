<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { data: items } = await useAsyncData("menu", () => $fetch("/api/menu"));
const colorMode = useColorMode();
if (!items.value) {
  console.error("No se pudieron cargar los elementos del menú.");
}
function toggleDarkMode() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}
</script>
<template>
  <div
    class="min-h-screen flex flex-col justify-start align-start bg-zinc-100 dark:bg-zinc-900"
  >
    <div
      class="py-3 px-5 flex justify-end items-center border-b-1 border-zinc-200 dark:border-zinc-800"
    >
      <SwitchesDarkMode />
    </div>
    <div class="flex justify-start align-center">
      <div class="py-3 px-5 flex flex-col justify-start align-center">
        <span class="mb-3 w-full text-center text-2xl text-primary font-bold"
          >Sistema en blanco</span
        >
        <UNavigationMenu
          orientation="vertical"
          :items="items"
          class="data-[orientation=vertical]:w-full"
        />
      </div>
      <div class="px-15 py-10 flex-1 flex flex-col">
        <header class="w-full flex flex-col justify-start align-start gap-5">
          <slot name="actions" />
          <slot name="header" />
        </header>
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
