<script setup>
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-secondary mb-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">SHOP</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/shop" class="nav-link">Shop</router-link>
                    </li>
                </ul>
                <span class="d-flex">
                    <router-link to="/cart">
                        <img src="../assets/shopping-cart.png" alt="shopping cart" style="max-width: 30px;">
                    </router-link>
                </span>
            </div>
        </div>
    </nav>
</template>