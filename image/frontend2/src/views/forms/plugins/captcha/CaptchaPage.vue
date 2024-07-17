<script setup>
import { ref } from 'vue';
import { VueRecaptcha } from 'vue3-recaptcha-v2';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

const page = ref({ title: 'Captcha Page' });
const breadcrumbs = ref([
  {
    title: 'Plugins',
    disabled: false,
    href: '#'
  },
  {
    title: 'Captcha',
    disabled: true,
    href: '#'
  }
]);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="ReCaptcha">
        <vue-recaptcha theme="light" size="normal" :tabindex="0" />
      </UiParentCard>
    </v-col>
  </v-row>
</template>
