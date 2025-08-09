<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
const { signIn } = useAuth();
const toast = useToast();
const loading = ref(false);
const schema = z.object({
  username: z
    .string()
    .min(1, { message: "El nombre de usuario es obligatorio." }),
  password: z.string().min(1, { message: "La contraseña es obligatoria." }),
});
type Schema = z.output<typeof schema>;
const state = reactive<Partial<Schema>>({
  username: undefined,
  password: undefined,
});
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { username, password } = event.data;
  loading.value = true;
  try {
    await signIn({ username, password }, { redirect: false });
    await navigateTo("/");
  } catch (error) {
    toast.add({
      title: "Algo salió mal",
      description: "Usuario o contraseña no son válidos",
      color: "secondary",
      icon: "lucide:circle-alert",
    });
    console.error("Error durante el inicio de sesión:", error);
  }
  loading.value = false;
}
</script>
<template>
  <NuxtLayout name="login">
    <template #title>
      <h1 class="mb-3 w-full text-center text-5xl text-primary font-bold">
        Acceder
      </h1>
    </template>
    <UForm
      :schema="schema"
      :state="state"
      class="w-full space-y-4"
      @submit="onSubmit"
    >
      <UFormField
        label="Nombre de usuario"
        name="username"
        class="text-xl"
        size="xl"
      >
        <UInput v-model="state.username" class="w-full" />
      </UFormField>
      <UFormField label="Contraseña" name="password" class="text-xl" size="xl">
        <UInput v-model="state.password" type="password" class="w-full" />
      </UFormField>
      <UButton :loading="loading" color="primary" size="xl" type="submit">
        Acceder
      </UButton>
    </UForm>
  </NuxtLayout>
</template>
