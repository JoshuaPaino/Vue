<template>
  <VRow>
    <VCol v-for="n in 200" :key="n" cols="4" sm="3" md="2" lg="1">
      <VCard
        class="mx-5 my-2"
        @click="
          copyUrl(
            `https://picsum.photos/500/300?image=${n * 5 + 10}${
              p.isWithColor ? '' : '&grayscale'
            }`
          )
        "
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${
            p.isWithColor ? '' : '&grayscale'
          }`"
          :lazy-src="`https://picsum.photos/10/5?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { defineProps } from "vue";
const p = defineProps(["isWithColor"]);
const copyUrl = async (url) => {
  await navigator.clipboard.writeText(url);
};
</script>