<script setup lang="ts">
import 'v-calendar/dist/style.css';
import { ref, shallowRef } from 'vue';

import { DatePicker } from 'v-calendar';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const date = new Date();
const timezone = ref('');

const range = ref({
  start: new Date(2020, 0, 1),
  end: new Date(2020, 0, 5)
});

const page = ref({ title: 'Calendar' });

const breadcrumbs = shallowRef([
  {
    title: 'Applications',
    disabled: false,
    href: '#'
  },
  {
    title: 'Calendar',
    disabled: true,
    href: '#'
  }
]);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" lg="4" sm="12">
      <UiParentCard title="Calendar with Date">
        <DatePicker is-expanded v-model="date" mode="date" />
      </UiParentCard>
    </v-col>
    <v-col cols="12" lg="4" sm="12">
      <UiParentCard title="Calendar with Min Date">
        <DatePicker is-expanded v-model="date" :min-date="new Date()" />
      </UiParentCard>
    </v-col>
    <v-col cols="12" lg="4" sm="12">
      <UiParentCard title="Calendar with Max Date">
        <DatePicker is-expanded v-model="date" :max-date="new Date()" />
      </UiParentCard>
    </v-col>

    <v-col cols="12" lg="6" sm="12">
      <UiParentCard title="Calendar Date & Time">
        <div>
          <div class="flex mb-2">
            <label class="text-gray-600 font-medium"><input class="mr-1" type="radio" value="" v-model="timezone" />Local</label>
            <label class="text-gray-600 font-medium ml-3"><input class="mr-1" type="radio" value="utc" v-model="timezone" />UTC</label>
          </div>
          <DatePicker v-model="date" mode="dateTime" :timezone="timezone" />
        </div>
      </UiParentCard>
    </v-col>
    <v-col cols="12" lg="6" sm="12">
      <UiParentCard title="Calendar Date Range">
        <DatePicker v-model="range" is-range />
      </UiParentCard>
    </v-col>
    <v-col cols="12" lg="12" sm="12">
      <UiParentCard title="Calendar Month Steps">
        <DatePicker v-model="date" :rows="2" :step="1" />
      </UiParentCard>
    </v-col>
  </v-row>
</template>
