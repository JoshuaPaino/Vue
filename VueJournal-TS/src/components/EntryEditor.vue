<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import type Emoji from "@/types/Emoji";
import {ref, computed} from "vue";
//data
const text = ref("");
const emoji = ref<Emoji | null > (null);
const charCount = computed(() => text.value.length);
const maxChars = 280;
//events
defineEmits(["create"]);
//methods
const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
 if(textarea.value.length <= maxChars){
  text.value = textarea.value;
 } else {
  text.value = textarea.value = textarea.value.substring(0,maxChars);
 }
}

</script>
<template>
  <form class="entry-form" @submit.prevent="$emit('create',{text, emoji})">
    <textarea 
    v-model="text"
    @keyup="handleTextInput"
    placeholder="New Journal Entry for Joshua Paino"
    ></textarea>
    <EmojiField v-model="emoji"/>
    <div class="entry-form-footer">
      <span> {{charCount}} / {{maxChars}}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
