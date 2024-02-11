<template>
    <div class="min-vh-100 px-0">
        <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-action list-group-item-secondary fw-bold disabled">
                Categories
                <hr class="border border-secondary mb-0">
            </li>
        </ul>
        <ul class="list-group list-group-flush" v-for="(category, index) of productData.categories">
            <button type="button" class="list-group-item list-group-item-action">{{ category }}</button>
        </ul>
    </div>
</template>

<script setup>
import { useProductDataStore } from '@/stores/productData';

const productData = useProductDataStore();

</script>