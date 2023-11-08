<template >
   <div class="mx-auto">

    <nav class="border">
      <Navbar class="fixed t-0"/>
    </nav>

    <div class="">
      <RouterView />
      <Footer />
    </div>


  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  components:{
    Navbar,
    Footer,
  }
}
</script>
<style scoped>

</style>