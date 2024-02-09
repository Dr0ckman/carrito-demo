<template>
    <!-- CONTENT START -->
    <div class="ms-2">
        <h1>{{ findProductName($route.params.id) }}</h1>
        <div class="container">
            <div class="row">
                <div class="col-3 bg-dark position-relative mx-0">
                    <p class="position-absolute top-50 start-50 translate-middle text-light">{{ findProductName($route.params.id) }} image</p>
                </div>
                <div class="col-9">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia libero animi! A hic dolorem,
                        delectus, quia quos distinctio nulla velit consequuntur odio amet esse fugiat libero reprehenderit
                        id
                        sapiente.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam dolorem accusantium a quod laudantium
                        non
                        molestiae aliquid aperiam, hic corrupti ducimus nostrum delectus consectetur totam dignissimos sit,
                        odit
                        velit
                        amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem necessitatibus ab tempore
                        eligendi
                        repellat
                        expedita facere! Ex nam rem sit autem laudantium libero dolore? Maiores, inventore assumenda? Ipsa,
                        totam.</p>
                </div>
            </div>
        </div>

        <hr>

        <!-- CONTENT END -->
    </div>
</template>
  
<script setup>
import { useProductDataStore } from '@/stores/productData';
import { computed, onMounted } from 'vue';

const productData = useProductDataStore();

const findProductName = (id) => {
    let productName;
    for (let [key, value] of Object.entries(productData.products)) {
        console.log(value._id);
        if (value._id === id) {
            productName = value.name;
        }
    }
    return productName;
}

</script>
  