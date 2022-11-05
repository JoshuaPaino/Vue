<script setup>
const route = useRoute();
const {data} = await useFetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,{
    pick: ["Title","Plot","Poster"], 
    key:`/movies/${route.params.id}`,
    onResponse({request,response}){
        if(response._data.Error === "Incorrect IMDb ID."){
            showError({statusCode:404,statusMessage: "PageNotFound"})
        }
    },
})
useHead({
    title: data.value.Title,
    meta: [
        {name: "description", content: data.value.Plot},
        {property: "og:description", content: data.value.Plot},
        {property: "og:image", content: data.value.Poster},
        {name: "twitter:card", content: `summary_large_image`},
    ]
})

// How to fetch data without the useFetch composable 
// const { data } = await useAsyncData(`/movies/${route.params.id}`,() => {
//   return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
// },
// {
//     // Pick only what you need
//     pick: ["Title","Plot"],
// } );
</script>

<template>
  <div>
    <h1>{{data}}</h1>
  </div>
</template>

<style scoped></style>
