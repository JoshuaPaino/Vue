<template>
  <VNavigationDrawer rail permanent="" expand-on-hover right>
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        title="Random User"
        subtitle="Random@fakeuser.com"
      >
      </VListItem>
    </VList>
    <VDivider />
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-image"
        title="Color Gallery"
        value="color"
        @click="selectOption(true)"
      />
      <VListItem
        prepend-icon="mdi-dialpad"
        title="Grayspace Gallery"
        value="color"
        @click="selectOption(false)"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script setup>
import { defineEmits } from "vue";
const emits = defineEmits(["selectOption"]);
const selectOption = (isColor) => {
  emits("selectOption", isColor);
};

</script>
