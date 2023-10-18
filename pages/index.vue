<script setup lang="ts">
import { countries, ticketClasses, trips, tripTypes } from '~/dummy/data'
const bookingForm = reactive({
  from: null,
  to: null,
  ticket_class: null,
  trip_date: null,
  trip_class: null,
  trip_type: null,
  passengers: null
})
const { locale } = useI18n()
<<<<<<< HEAD
=======

>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
const submit = () => {
  console.log('sent ');
}

</script>

<template>
  <section
<<<<<<< HEAD
    class="container gap-12 pb-12 md:grid md:grid-cols-2 text-emerald-500 place-content-center">
=======
    class="container md:grid h-[85vh] gap-12 md:grid-cols-2 text-emerald-500 place-content-center">
>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
    <img src="/images/travelling.svg" alt="booking a travel"
      class="object-contain w-full max-md:hidden" />

    <div
      class="flex flex-col items-center p-4 border border-gray-100 rounded-2xl ring-1 ring-gray-100">
      <h1 class="mb-6 text-2xl font-semibold text-center">{{
        $t('ready-to-book-your-vacancy') }}</h1>
      <UForm :state="bookingForm" @submit="submit"
<<<<<<< HEAD
        class="w-full px-6 space-y-6 capitalize grow">
=======
        class="w-full px-6 space-y-3 capitalize grow">
>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
        <UFormGroup :label="$t('from')" required>
          <USelect v-model="bookingForm.from" :options="countries"
            :optionAttribute="locale === 'ar' ? 'name_ar' : 'name_en'"
            valueAttribute="id" />
        </UFormGroup>
        <UFormGroup :label="$t('to')" required>

          <USelect v-model="bookingForm.to" :options="countries"
            :optionAttribute="locale === 'ar' ? 'name_ar' : 'name_en'"
            valueAttribute="id" />
        </UFormGroup>
        <UFormGroup :label="$t('trip-type')" required>
          <div class="flex gap-5">
            <URadio v-for="tripType of tripTypes" :label="tripType.name[locale]"
              :key="tripType.id" v-model="bookingForm.trip_type"
              name="trip_type" />
          </div>
        </UFormGroup>
        <UFormGroup :label="$t('ticket-class')" required>
          <USelect v-model="bookingForm.ticket_class" :options="ticketClasses"
<<<<<<< HEAD
            :optionAttribute="locale === 'ar' ? 'name_ar' : 'name_en'"
            valueAttribute="id" />
=======
            option-attribute="name" valueAttribute="id" />
>>>>>>> d1413d84515db06da3db9f126a9f2a05de452453
        </UFormGroup>
        <UFormGroup :label="$t('trip-date')" required>
          <DatePicker v-model="bookingForm.trip_date" />
        </UFormGroup>
        <UFormGroup :label="$t('passengers')" required>
          <UInput type="number" min="1" v-model="bookingForm.passengers" />
        </UFormGroup>
        <UButton type="submit" class="block ms-auto">
          {{ $t('submit') }}
        </UButton>
      </UForm>
    </div>
  </section>
  <section class="container grid gap-6 pb-12 md:grid-cols-2 lg:grid-cols-3">
    <template v-for="trip in trips" :key="trip.id">
      <TripCard :trip="trip" />

    </template>
  </section>
</template>
