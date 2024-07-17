<script setup lang="ts">
import { ref } from 'vue';
const features = ref([
  {
    title: 'Beautiful User Interface',
    icon: 'mdi-palette-outline',
    color: 'text-primary',
    bg: 'bg-lightprimary'
  },
  {
    title: 'Organized Code Structure',
    icon: 'mdi-code-braces',
    color: 'text-secondary',
    bg: 'bg-lightsecondary'
  },
  {
    title: 'The Hassle-free Setup Process',
    icon: 'mdi-emoticon-cool-outline',
    color: 'text-primary',
    bg: 'bg-lightprimary'
  },
  {
    title: '1 Auth Methods',
    icon: 'mdi-lock-open-outline',
    color: 'text-secondary',
    bg: 'bg-lightsecondary'
  },
  {
    title: 'Vue 3 Composition Api',
    icon: 'mdi-vuetify',
    color: 'text-secondary',
    bg: 'bg-lightsecondary'
  },
  {
    title: 'Code Splitting',
    icon: 'mdi-call-split',
    color: 'text-primary',
    bg: 'bg-lightprimary'
  },
  {
    title: 'Google Fonts',
    icon: 'mdi-text-shadow',
    color: 'text-secondary',
    bg: 'bg-lightsecondary'
  },
  {
    title: 'Figma Design Files',
    icon: 'mdi-brush-outline',
    color: 'text-primary',
    bg: 'bg-lightprimary'
  }
]);
</script>

<template>
  <v-row>
    <v-col md="6" cols="12">
      <h5 class="text-h5 text-primary">Key Features</h5>
      <h2 class="text-h2 my-3">Know more about Berry</h2>
      <p>If you're in need of a web app that is both user-friendly and scalable, this is the template for you.</p>
    </v-col>
    <v-col md="12"></v-col>
    <v-col md="3" cols="12" v-for="feat in features" :key="feat.title" data-aos="fade-up" data-aos-duration="800">
      <v-card variant="outlined" class="pa-5 d-flex align-center gap-3">
        <v-sheet elevation="0" rounded="md" :class="`flex-shrink-0 text-center ${feat.bg}`" height="70" width="70">
          <v-icon size="26" :class="`${feat.color} mt-5`">{{ feat.icon }}</v-icon>
        </v-sheet>
        <h5 class="text-h5">{{ feat.title }}</h5>
      </v-card>
    </v-col>
    <v-col md="12" class="text-center mt-8">
      <v-btn color="primary" target="_" href="https://store.vuetifyjs.com/products/berry-vuetify-admin-template" class="mr-2"
        >Get Berry</v-btn
      >
      <v-btn color="primary" target="_" href="https://blog.berrydashboard.io/" variant="text">Know More</v-btn>
    </v-col>
  </v-row>
  <div class="spacer"></div>
</template>
