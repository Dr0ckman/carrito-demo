<template>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <Sidebar />
            </div>
            <div class="col-10">
                <h1>Shop View</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi numquam maiores voluptate,
                    fuga
                    quod
                    similique earum enim, laudantium laboriosam voluptates excepturi harum aliquid maxime sed totam ut neque
                    accusantium?</p>

                <hr>
                <!-- CARD ZONE START -->
                <div class="text-center">
                    <div class="row justify-content-between gy-3">
                        <div class="col-4" v-for="(product, index) of products">
                            <Card :card-title="product.name" :card-product-id="product._id"
                                :card-text="`\$${product.price}`" card-link="#" />
                        </div>
                    </div>
                </div>
                <div class="container position-relative mt-3">
                    <nav class="position-absolute end-0">
                        <ul class="pagination">
                            <button class="page-item page-link">Previous</button>
                            <button class="page-item page-link" @click="handleClickingPagination(1)">1</button>
                            <button class="page-item page-link" @click="handleClickingPagination(2)">2</button>
                            <button class="page-item page-link" @click="handleClickingPagination(3)">3</button>
                            <button class="page-item page-link" @click="handleClickingPagination(4)">4</button>
                            <button class="page-item page-link" @click="handleClickingPagination(5)">5</button>
                            <button class="page-item page-link" @click="handleClickingPagination(6)">6</button>
                            <button class="page-item page-link">Next</button>
                        </ul>
                    </nav>
                </div>
                <!-- CARD ZONE END -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue';
import Sidebar from '@/components/Sidebar.vue';
import { ref, onMounted } from 'vue';

let products = ref([]);
let page = ref(1);

const getProductsPage = async () => {
    const response = await fetch(`http://localhost:3000/products?page=${page.value}`)
    products.value = await response.json()
    console.log(products.value)
}

const handleClickingPagination = (p) => {
    page.value = p;
    getProductsPage();
}

onMounted(
    getProductsPage
)

</script>