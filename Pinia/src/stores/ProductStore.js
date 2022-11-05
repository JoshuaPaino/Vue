import { defineStore } from "pinia";
import product from '@/data/products.json'
export const useProductStore = defineStore("ProductStore", {
    //state
    state: () => {
        return {
            products,
        };
    },
    //actions
    // getter
})