<template>
    <nav style="display:flex; gap:10px;">
      <!-- 

        /movies/123
       -->
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </nav>
   <slot></slot>
</template>