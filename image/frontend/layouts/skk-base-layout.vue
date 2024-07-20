<template>
  <div>
    <p>伊米塔 shikoku-base-layout</p>
    <nav>
      <NuxtLink to="/" class="gold-link">Home</NuxtLink>
      <NuxtLink to="/about" class="gold-link">About</NuxtLink>
      <NuxtLink to="/admin" class="gold-link">Admin</NuxtLink>
      <NuxtLink to="/budapest/buda" class="gold-link">Buda</NuxtLink>
      <!-- <NuxtLink to="/budapest/pest" class="gold-link">Pest</NuxtLink> -->
    </nav>
    <slot />
  </div>
</template>