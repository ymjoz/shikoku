<template>
  <div>
    <p>admin dashboard layout</p>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
      <NuxtLink to="/budapest/buda">Buda</NuxtLink>
      <!-- <NuxtLink to="/budapest/pest">Pest</NuxtLink> -->
    </nav>
    <slot />
  </div>


</template>