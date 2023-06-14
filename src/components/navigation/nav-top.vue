<template>
    <nav class="top-navigation animate__animated animate__backInDown">
        <div class="logo primary-text-color">{{ title }}</div>
        <ul class="nav-links">
            <li class="nav-item primary-text-color">
                <a href="#">About</a>
            </li>
            <li class="nav-item primary-text-color">
                <a href="#">Experience</a>
            </li>
            <li class="nav-item primary-text-color">
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { defineProps } from "vue";

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    setup() {
        defineProps({
            title: {
                type: String,
                required: true,
            },
        });
    },
};
</script>

<style scoped>
.top-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 10px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-item a {
    text-decoration: none;
    color: #2a2f4f;
}
.nav-item {
    transition: 0.5s;
    border-radius: 5px;
    padding: 5px 10px;
}
.nav-item:hover {
    border-radius: 5px;
    transition: 0.5s;
    background-color: #2a2f4f;
    color: #cfcfcf;
}
.nav-item:hover a {
    color: #cfcfcf;
}
</style>
