<script setup>
import { ref, computed } from 'vue'

const Header = ref('Shopping List App')
const editing = ref(false)
const items = ref([
 
])
const reversedItems = computed(()=>[...items.value].reverse())
const characterCount = computed(()=>[...items.value].reverse())
const newItem = ref("")
const newItemHighPriority = ref(false)
const saveItem = ()=>{
	items.value.push(
    {
      id: items.value.length + 1,
      label: newItem.value,
      highPriority: newItemHighPriority.value
    })
  newItem.value = ""
  newItemHighPriority.value = ""
}
const doEdit = (e)=>{
  editing.value = e
  newItem.value = ""
  newItemHighPriority.value = ""
}

const togglePurchased = (item) =>{
  item.purchased = !item.purchased
}
</script>

<template>



   
    <div id="shopping-list">
        <div class="header">
            <!-- The header defaults to Shopping List App!! if it's removed -->
            <h1>{{ Header}}</h1>
            <button v-if="editing" class="btn btn-cancel" @click="doEdit(false)">
      Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)"> Add Item
    </button>
        </div>
        <form 
		class="add-item-form"
    v-if="editing"
  	@submit.prevent="saveItem"       
	>
    <input 
    	v-model.trim="newItem"
 			type="text" 
      placeholder="Add an item"
    >
    <label>
      <input type="checkbox" v-model="newItemHighPriority"> 
      High Priority
    </label>
    <button 
      :disabled="newItem.length < 3"
      class="btn btn-primary"
    >
      Save Item
    </button>
   </form>
   <ul>
    <li 
      v-for="(item, index) in reversedItems" 
      @click="togglePurchased(item)"
      :key="item.id"
      class="static-class"
      :class="{
        strikeout: item.purchased, 
        priority: item.highPriority, 
      }"
    >
      {{item.label}}
    </li>
  </ul>
  <p v-if="!items.length">
    Nice job!. You've bought all your items!
  </p>
       
      
      </div>

</template>

<style scoped>

</style>
