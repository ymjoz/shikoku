<script setup lang="ts">
  import LogoLight from '@/assets/images/landing/logo-white.svg';
  import YMJOZ from '@/assets/images/landing/ymjoz-white.svg';
  import YMJOZninja from '@/assets/images/landing/ymjoz-ninja.svg';
</script>

<template>
  <v-row class="bg-secondary">
    <v-col cols="12">
      <v-container class="maxWidth">
        <v-row class="align-center text-center text-md-left">
          <v-col md="6" cols="12" class="my-3">
            <!-- <img :src="LogoLight" alt="logo" /> -->
            <!-- <img :src="YMJOZ" alt="logo" /> -->
            <img :src="YMJOZninja" alt="logo" />
          </v-col>
          <v-col md="6" cols="12" class="text-center text-md-right">
            <ul class="d-flex justify-center justify-md-end gap-4 customlink align-center">
              <li>
                <a href="https://www.youtube.com/@minkoder" target="_blank"><v-icon
                    class="mr-2">mdi-youtube</v-icon>Youtube</a>
              </li>
              <li>
                <a href="https://blog.berrydashboard.io/" target="_blank"><v-icon
                    class="mr-2">mdi-instagram</v-icon>Blog</a>
              </li>
              <li>
                <a href="https://www.facebook.com/chen.s.wei" target="_blank"><v-icon
                    class="mr-2">mdi-facebook</v-icon>Facebook</a>
              </li>
              <li>
                <a href="https://x.com/CswOz" target="_blank"><v-icon class="mr-2">mdi-twitter</v-icon>Twitter</a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12" class="bg-dark">
      <v-container class="maxWidth"><small> © ymjoz </small></v-container></v-col>
  </v-row>
</template>
<style lang="scss">
  .customlink {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: white;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .bg-dark {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
