<script >
import { ref, reactive, watch } from 'vue';
import YummyMealVue from './assets/YummyMeal.vue';


export default {
  components: { YummyMealVue },
  setup() {

    const name = ref("The Snazzy Burger");
    const meal = reactive({ name: "Hamburger", price: 10 });
    console.log(meal, "meal");
    const placeOrder = () => { alert("Your order has been placed"); }
    const AddItemToCart = () => alert("Item added to Cart");
    return { name, placeOrder, AddItemToCart, meal };
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="name" />
  <button @click="placeOrder">Place Order</button>
  <YummyMealVue name="Hamburger" price="2.00" @addToCart="AddItemToCart"></YummyMealVue>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
