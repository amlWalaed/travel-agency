export default defineAppConfig({
  ui: {
    strategy: "override",
    primary: "emerald",
    gray: "cool",
    container: {
      constrained: "max-w-7xl",
      base: "mx-auto",
      padding: "px-4 sm:px-6 lg:px-8",
    },
    label: {
      base: "block font-medium text-gray-700 dark:text-gray-200 mt-4",
    },
  },
});
