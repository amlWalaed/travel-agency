<template>
  <HeadlessListbox class="relative" v-slot="{ open, value, disabled }"
    v-model="proxyValue" as="div">
    <HeadlessListboxButton class="rounded">{{ value ?? placeholder }}
    </HeadlessListboxButton>
    <transition enter-from-class="opacity-0 scale-80"
      enter-to-class="scale-100 opacity-100"
      enter-active-class="transition duration-150 ease-in-out "
      leave-active-class="transition duration-150 ease-in-out"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-50 opacity-0">
      <HeadlessListboxOptions
        :class="['absolute top-0 rlt:left-0 ltr:right-0',
          'min-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow- lg ring-1 ring-gray-200 focus:outline-none p-4']"
        v-show="open">
        <HeadlessListboxOption v-for="item in list" :key="item[key]"
          :value="item[key]">
          {{ item[label] }}
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </transition>
  </HeadlessListbox>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: String,
  placeholder: String,
  key: String,
  label: String,
  list: Array
})
const emit = defineEmits(['update:modelValue'])
const proxyValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})


</script>



<style></style>
