<template lang="">
    <div>
        <p>
            <strong>{{name}} </strong>
            {{ pricePretty }}
            <button @click="addToCart">Add To Cart</button>
        </p>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: {
        name: String,
        price: Number,
    },
    setup(props, { emit }) {
        const addToCart = () => emit("AddToCart", props.name);
        const pricePretty = computed(() => `$${props.price}`);

        return { addToCart, pricePretty };

    },

}
</script>

<style lang="">
    
</style>