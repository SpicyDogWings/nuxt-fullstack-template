import type { NavigationMenuItem } from "@nuxt/ui";

export default defineEventHandler((): NavigationMenuItem[][] => {
  return [
    [
      {
        label: "Inicio",
        icon: "lucide:home",
        to: "/",
      },
    ],
  ];
});
