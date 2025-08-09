<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-zinc-100 dark:bg-zinc-900"
  >
    <div class="w-full max-w-2/6 px-4 py-8 sm:px-6 lg:px-8">
      <header v-if="$slots.title" class="mb-8">
        <slot name="title" />
      </header>
      <main class="my-5 flex-1 flex flex-col justify-center align-center">
        <slot />
      </main>
    </div>
  </div>
</template>
