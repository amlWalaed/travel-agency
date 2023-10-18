<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath()
const { locales, locale: lang, setLocale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})
const { t } = useI18n()
</script>
<template>
  <Html :lang="head?.htmlAttrs?.lang" :dir="head?.htmlAttrs?.dir">
<<<<<<< HEAD
  <nav class="container sticky flex items-center justify-between px-6 py-4">
=======
  <nav class="container sticky flex items-center justify-between py-4">
>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
    <AppLogo />
    <HeadlessMenu as="div" class="relative">
      <HeadlessMenuButton
        class="px-1 py-px border rounded border-primary text-primary">
<<<<<<< HEAD
        {{ locales.find(l => l.code === lang).name }}
=======
        {{ lang }}
>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
      </HeadlessMenuButton>
      <HeadlessMenuItems
        class="absolute flex flex-col items-center justify-center gap-2 p-2 mt-2 rounded shadow-sm top-full rtl:left-0 ltr:right-0 text-primary">
        <HeadlessMenuItem v-for="locale in locales" :key="locale.code">
          <NuxtLink :to="switchLocalePath(locale.code)"
            @click.prevent.stop="setLocale(locale.code)">
            {{ locale.name }}
          </NuxtLink>
        </HeadlessMenuItem>
      </HeadlessMenuItems>
    </HeadlessMenu>
  </nav>
<<<<<<< HEAD
  <main class="px-6 ">
    <slot />
  </main>
=======
  <div>
    <slot />
  </div>
>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
  <footer class=" bg-primary">
    <div
      class="container flex items-center justify-between py-2 text-xs text-white">
      <span v-html="t('all-rights-are-preserved-by-aml-waled-and-copy-2023')" />
      <AppLogo />
    </div>
  </footer>

  </Html>
</template>