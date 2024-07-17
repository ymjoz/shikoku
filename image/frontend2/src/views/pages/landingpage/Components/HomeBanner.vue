<script setup lang="ts">
  // assets
  import dashboard from '@/assets/images/landing/dashboard.png';
  import widget1 from '@/assets/images/landing/widget-1.png';
  import widget2 from '@/assets/images/landing/widget-2.png';
</script>

<template>
  <v-row class="spacer">
    <v-col cols="12" lg="4" md="5">
      <div class="pr-lg-4">
        <h1 class="bannerText my-5" data-aos="fade-up" data-aos-duration="500">
          Shikoku Project With <span class="text-primary">YMJOZ</span>
        </h1>
        <p class="mb-8" data-aos="fade-up" data-aos-duration="800">
          Berry is Vue3 based admin template which helps you to build faster and beautiful web applications.
          這裡是繁體中文字。
        </p>
        <div data-aos="fade-up" data-aos-duration="1000">
          <v-btn color="secondary" size="large" class="mr-2" to="/dashboard/default">Live Preview</v-btn>
          <v-btn color="primary" size="large" variant="text" target="_"
            href="https://store.vuetifyjs.com/products/berry-vuetify-admin-template">Purchase Now</v-btn>
        </div>
      </div>
    </v-col>
    <v-col cols="12" lg="8" md="7" class="d-none d-md-block">
      <div class="position-relative">
        <img :src="dashboard" alt="dashboard" class="HeaderImage" />
        <div class="widget1"><img :src="widget1" alt="widget" class="widgetImages" /></div>
        <div class="widget2"><img :src="widget2" alt="widget" class="widgetImages" /></div>
      </div>
    </v-col>
  </v-row>
  <div class="spacer"></div>
</template>
<style lang="scss">
  .bannerText {
    font-size: 4rem;
  }

  .HeaderImage {
    max-width: 100%;
    border-radius: 20px;
    transform: scale(1.5);
    transform-origin: 0 25%;
  }

  .widget1 {
    position: absolute;
    top: -40px;
    right: -170px;
    width: 290px;
    animation: 10s slideY linear infinite;
  }

  .widget2 {
    position: absolute;
    bottom: -90px;
    left: 300px;
    width: 280px;
    animation: 10s slideY linear infinite;
    animation-delay: 2s;
  }

  .widgetImages {
    max-width: 100%;
    filter: drop-shadow(0px 0px 50px rgb(33 150 243 / 30%));
  }

  @media (max-width: 800px) {
    .bannerText {
      font-size: 2rem;
    }
  }
</style>
