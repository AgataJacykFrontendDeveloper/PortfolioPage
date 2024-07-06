<script setup>
</script>

<template>
<Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from './layout/HeaderLayout.vue'
import Footer from './layout/FooterLayout.vue'

export default {
    components: {
    Header,
    Footer
    }
    }
</script>

<style>
@font-face {
  font-family: "Oswald";
  src: local("Oswald"), 
  url(./fonts/Oswald/Oswald-VariableFont_wght.ttf) format("truetype");
}
@font-face {
  font-family: "Wasted";
  src: local("Wasted"), 
  url(./fonts/Wasted/Wasted.otf) format("truetype");
}
</style>