<script setup>
const query = ref("");
const movies = ref([]);
async function search(){
  // wrapper function around omyfetch
 const {Search} = await $fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4c9bff7e&s=${query.value}`);
 movies.value = Search;
}
</script>

<template>
  <div>
  <form @submit.prevent="search">
    <input type="text" v-model="query" />
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title" width="100" />
      </NuxtLink>
    </li>
  </ul>
  </div>

</template>

<style scoped></style>
