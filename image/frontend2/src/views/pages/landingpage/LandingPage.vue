<script setup lang="ts">
import Appbar from './Components/AppBarMenu.vue';
import HomeBanner from './Components/HomeBanner.vue';
import Features from './Components/FeatureSection.vue';
import Demos from './Components/DemoSection.vue';
import KeyFeatures from './Components/KeyFeatures.vue';
import Timeline from './Components/TimelineSection.vue';
import Subscribe from './Components/SubscribeSection.vue';
import Footer from './Components/FooterSection.vue';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';
import AOS from 'aos';

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <v-layout>
    <Appbar />
    <v-main class="ma-0">
      <v-container class="maxWidth">
        <HomeBanner />
        <Features />
        <Demos />
        <Timeline />
        <KeyFeatures />
      </v-container>
      <Subscribe />
      <Footer />
    </v-main>
  </v-layout>
</template>
