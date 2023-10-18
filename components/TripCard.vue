<script setup>
const props = defineProps(["trip"]);
const card = ref();
const { locale } = useI18n();
const addFlipped = () => {
  card.value.classList.add("flipped");
};
const removeFlipped = () => {
  card.value.classList.remove("flipped");
};
</script>
<template>
  <div class="relative block deck" @mouseover="addFlipped"
    @mouseleave="removeFlipped">
    <div ref="card" class="card">
      <div
        class="relative origin-bottom bg-no-repeat bg-cover rounded-2xl front face"
        :style="`background-image:url(${trip.image})`">
        <div
          class="absolute w-40 p-2 text-white bg-black bg-opacity-60 bottom-10 rounded-is-xl inline-end-0">
          <div class="font-bold">{{ trip.name && trip.name[locale]
          }}</div>
          <div v-if="trip.tours_count > 0">
            {{ trip.tours_count }}
            <span>{{
              trip.tours_count > 1
              ? $t("tours")
              : $t("tour")
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="relative text-white origin-bottom bg-no-repeat bg-cover rounded-2xl back face"
        :style="`background-image:url(${trip.image})`">
        <div class="absolute inset-0 flex flex-col gap-2 p-6 bg-black/50">
          <div
            class="mb-6 text-lg text-center uppercase first-letter:text-primary first-letter:font-bold">
            {{ trip.name && trip.name[locale] }}
          </div>
          <div class="mt-auto mb-6 line-clamp-6"
            v-html="trip.description && trip.description[locale]" />
          <NuxtLink to="/" class="self-end mt-auto">
            {{ $t("view-more") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


