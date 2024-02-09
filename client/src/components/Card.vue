<script setup>
const props = defineProps({
    cardImg: String,
    cardTitle: String,
    cardProductId: String,
    cardText: String,
    cardLink: String
})
</script>
<template>
    <div class="card">
        <!-- <img :src=cardImg class="card-img-top" alt="..."> -->
        <div style="background-color: gray; min-height: 10rem;" class="card-img-top"></div>
        <div class="card-body">
            <h5 class="card-title"><router-link :to="`/product/${cardProductId}`">{{ cardTitle }}</router-link></h5>
            <p class="card-text">{{ cardText }}</p>
            <a :href=cardLink class="btn btn-primary">Add to cart</a>
        </div>
    </div>
</template>