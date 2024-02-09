import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useProductDataStore = defineStore('productData', () => {
    let products = ref(0);
    let categories = ref([]);

    onMounted(
        async () => {
            const response = await fetch("http://localhost:3000/products");
            products.value = await response.json();
            for (let product of products.value) {
                if (!categories.value.includes(product.category)) {
                    categories.value.push(product.category);
                }
            }
            console.log(categories);
        }
    )

    return { products, categories }
})
