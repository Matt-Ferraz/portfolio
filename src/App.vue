<script setup>
import MyExperience from "./components/experince/myExperience.vue";
import AboutMe from "./components/homepage/AboutMe.vue";
import NavTop from "./components/navigation/nav-top.vue";
</script>

<template>
    <NavTop title="Summary" />
    <header>
        <div class="mt-10 animate__animated animate__backInDown">
            <AboutMe />
        </div>
        <!-- <div class="mt-5 animate__animated animate__backInUp">
            <MyExperience />
        </div> -->
    </header>

    <main></main>
</template>

<style scoped>
.mt-10 {
    margin-top: 10vh;
}
.mt-5 {
    margin-top: 5vh;
}
</style>
