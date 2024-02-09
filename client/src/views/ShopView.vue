<template>
    <h1>Shop View</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi numquam maiores voluptate, fuga quod
        similique earum enim, laudantium laboriosam voluptates excepturi harum aliquid maxime sed totam ut neque
        accusantium?</p>

    <!-- CARD ZONE START -->
    <div class="container text-center">
        <div class="row justify-content-between gy-3">
            <div class="col-4" v-for="(product, index) of productData.products">
                <Card :card-title="product.name" :card-product-id="product._id" :card-text="`\$${product.price}`" card-link="#" />
            </div>
        </div>
    </div>
    <!-- CARD ZONE END -->
</template>

<script setup>
import Card from '@/components/Card.vue';

import { useProductDataStore } from '@/stores/productData';

const productData = useProductDataStore();

</script>