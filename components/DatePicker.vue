<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const props = defineProps({
    modelValue: String,
});
const emit = defineEmits(['update:modelValue']);
const date = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
});
const format = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${ day }/${ month }/${ year }`;
};
const { locale } = useI18n();
</script>

<template>
    <div>
        <VueDatePicker v-model="date" :min-date="new Date()" :format="format"
            auto-apply teleport :locale="locale">
            <template #dp-input="{ value, }">
                <UInput type="text" :modelValue="value" />
            </template>

        </VueDatePicker>
    </div>
</template>

<style></style>