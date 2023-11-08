<template >
    <div class="bacg  mx-auto md:w-full h-[1000px]">
        
    </div>

    <!-- Bloklar qismi -----------------===----------------------------------------- -->
    <div class=" w-full xl:h-[1575px] xl:py-0 py-10 h-auto text-white bg-[#292930] flex justify-center items-center">
        <div class="xl:w-[1200px] w-full  xl:h-[1233px] h-auto">
            <div class="md:px-0 px-5 w-full mb-20 h-auto text-center">
                <div class=""><img :src="iconsozlama" class="mx-auto"></div>
                <div class="">
                    <p class="my-5">// 01 . Services</p>
                    <p class="text-[35px]">High-impact services to take your business to the next level</p>
                </div>
            </div>
            <div class="w-full  h-auto gap-12 flex md:justify-between justify-center items-center flex-wrap">

               <Blok /> 
               <Blok />
               <Blok />
               <Blok />
               <Blok />
               <Blok />

            </div>
        </div>
    </div>
    <!-- /Bloklar qismi -----------------===----------------------------------------- -->
    <!-- Get in ------------------------------------------------------------------- -->
    <div class="get-bacg xl:w-[1200px] h-[400px] flex items-center rounded-3xl my-20 mx-auto">
        <div class="md:w-[588px] h-[220px] ml-[69px]">
            <h1 class="text-[45px]">Get in touch and <span class="text-[#5956E8]">start growing</span> your startup today</h1>
            <div class="flex mt-[56px]">
                <button class="py-[17px] px-[35px] mr-5 border-2 border-black rounded-xl focus:bg-black focus:text-white">Get in touch</button>
                <button class="py-[17px] px-[35px] mr-5 border-2 border-black rounded-xl focus:bg-black focus:text-white">Get in touch</button>
            </div>
        </div>
    </div>
    <!-- Get in ------------------------------------------------------------------- -->
</template>
<script>
import Blok from '../components/Blok.vue'
import iconsozlama from '../assets/icon/iconSozlama.svg';
export default {
    components:{
        Blok,
    },
    data() {
        return {
            iconsozlama,
        }
    },
}
</script>
<style scoped>
    .bacg {
        background: url(../assets/img/bannerSer.jpg);
        background-size:cover;
        background-position: center;
        padding: 150px 0 0 0;
    }
    .get-bacg{
        background: url(../assets/img/getBavg.jpg);
        background-size: cover;
        background-position: center;
        
    }
</style>