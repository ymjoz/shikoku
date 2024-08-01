<template>
  <div>
    <!-- <header>My SKK App</header> -->
    <p>
      default layout
    </p>
    <p>
      凱米颱風 快閃
    </p>
    <p>
      This is 陳詩偉の小站
    </p>
    <nav>
      <NuxtLink to="/" class="gold-link">Home</NuxtLink>
      <NuxtLink to="/about" class="gold-link">About</NuxtLink>
      <NuxtLink to="/admin" class="gold-link">Admin</NuxtLink>
      <NuxtLink to="/budapest/buda" class="gold-link">Buda</NuxtLink>
      <!-- <NuxtLink to="/budapest/pest" class="gold-link">Pest</NuxtLink> -->
      <a href="https://egg.helenfit.com/hello" class="gold-link" target="_blank" rel="noopener noreferrer">Hello</a>
      <a href="https://egg.helenfit.com/echo" class="gold-link" target="_blank" rel="noopener noreferrer">Echo</a>
    </nav>
    <slot />
  </div>


</template>