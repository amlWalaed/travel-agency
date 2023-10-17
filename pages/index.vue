<script setup lang="ts">
const { locale, locales } = useI18n()
</script>

<template>
  <div>
    <HeadlessListbox v-model="locale">
      <HeadlessListboxButton>{{ locale }}</HeadlessListboxButton>
      <HeadlessListboxOptions>
        <HeadlessListboxOption v-for="lang in locales" :key="lang.code" :value="lang.code">
          {{ lang.name }}
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
  </div>
</template>
