<script setup lang="ts"></script>

<template>
  <v-row>
    <v-col md="6" cols="12">
      <h5 class="text-h5 text-primary">Top Features</h5>
      <h2 class="text-h2 my-3">What Berry brings to you?</h2>
      <p>Berry is a solid dashboard template for your next project, with the following top features.</p>
    </v-col>
    <v-col md="12"></v-col>
    <v-col md="4" cols="12" data-aos="fade-up" data-aos-duration="800">
      <v-card variant="outlined" class="text-center pa-5">
        <v-sheet elevation="0" rounded="md" class="bg-lightprimary mx-auto" height="90" width="90">
          <v-icon size="40" class="text-primary mt-6">mdi-palette-outline</v-icon>
        </v-sheet>
        <h3 class="text-h3 mt-4">Beautiful User Interface</h3>
        <p class="my-3 text-body-1">Warm color palates and minimally designed interfaces make the user experience more comfortable.</p>
      </v-card>
    </v-col>
    <v-col md="4" cols="12" data-aos="fade-up" data-aos-duration="800">
      <v-card variant="outlined" class="text-center pa-5">
        <v-sheet elevation="0" rounded="md" class="bg-lightsecondary mx-auto" height="90" width="90">
          <v-icon size="40" class="text-secondary mt-6">mdi-menu</v-icon>
        </v-sheet>
        <h3 class="text-h3 mt-4">Modern Technology Stack</h3>
        <p class="my-3 text-body-1">
          Technology behind Berry is less complicated so you can focus on creating the actual web applications.
        </p>
      </v-card>
    </v-col>
    <v-col md="4" cols="12" data-aos="fade-up" data-aos-duration="800">
      <v-card variant="outlined" class="text-center pa-5">
        <v-sheet elevation="0" rounded="md" class="bg-lightsuccess mx-auto" height="90" width="90">
          <v-icon size="40" class="text-success mt-6">mdi-speedometer</v-icon>
        </v-sheet>
        <h3 class="text-h3 mt-4">Performance Centric</h3>
        <p class="my-3 text-body-1">Code that makes it easier and faster to render the page for your web applications.</p>
      </v-card>
    </v-col>
  </v-row>
</template>
