<template >
    <div class=" mx-auto md:w-full h-[1000px] flex justify-center items-center">
        <div class="xl:w-[1200px] xl:h-[569px] h-auto mx-auto flex items-center flex-wrap justify-center">
            <div class="md:w-[553px] h-[266px]">
                <h1 class="text-[70px] font-bold">Social Media Marketing</h1>
                <p class="text-[#555] mt-5 mr-5">Lorem Ipsum is simply dummy text of the printing and industry
                ftyuu Ipsum has been the industry's not only five centuries, but
                also the leap into electronic typesetting.</p>
            </div>
            <div class="img24">
                <img :src="image24" class="md:w-[631px] h-[569px]">
            </div>
        </div>
    </div>

    <!-- The core ------------------------------------------------------------------- -->
    <div class="w-full xl:h-[1600px] h-auto xl:py-0 py-12 md:px-0 px-5 my-10 bg-[#292930] text-white flex flex-wrap justify-center items-center">
        <div class="text-center">
            <img :src="icon30" class="mx-auto">
            <p class="my-5">// 02 . OUR VALUES</p>
            <h1 class="text-[40px]">The core values behind our work</h1>
        </div>
        <!-- swiper qism=============== -->
        
        <div class="xl:w-[1200px] xl:mt-0 mt-10 xl:h-[890px] h-auto flex flex-wrap xl:justify-between justify-center xl:gap-5 gap-5">
            <SwiperBlok />
            <SwiperBlok />
            <SwiperBlok />
            <SwiperBlok />
            <SwiperBlok />
            <SwiperBlok />
        </div>
        <!-- swiper qism=============== -->

        <div class="w-[377px] h-[64px] flex justify-between xl:mt-0 mt-10">
            <button class="py-[17px] px-[35px] border-2 mx-auto  hover:bg-black hover:text-white hover:border-none border-white rounded-xl">Get in touch</button>
            
        </div>
    </div>
    <!-- /The core ------------------------------------------------------------------- -->

    <!-- Our bulletproof ----------------------------------------------------------- -->
    <div class="our xl:w-[1200px] xl:h-[716px] h-auto xl:p-0 p-8 mx-auto rounded-xl my-12 flex-wrap flex justify-center items-center">
        <div class="md:w-[475px] h-[419px]">
            <h1 class="text-4xl">Our bulletproof process to win on Social Media</h1>
            <hr class="my-5 bg-[#CFCFCF]">
            <p class="text-[#555] mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudinbibendum senectus scelerisque non. Turpis matis morbi vivera ipsum adipiscing Mauris volutpat  Ipsum duis tempor.</p>
            <p class="checkbox text-[#555]"><input type="checkbox"> Dolor duis lorem enim eu nulla semper </p>
            <p class="checkbox text-[#555] my-3"><input type="checkbox">Lorem a eget blandit ac neque pulvinar</p>
            <p class="checkbox text-[#555]"><input type="checkbox">Pellentesque non integer ac id bibendum</p>
        </div>
        <div class="w-[444px] h-[397px]">
            <div class="flex justify-between">
                <img :src="nishon" alt="">
                <div class="w-[332px]">
                    <h3 class="text-2xl">Social Media Content Plan</h3>
                    <p class="text-[#555] mt-2">consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
                </div>
            </div>
            <div class="flex justify-between my-[30px]">
                <img :src="nishon" alt="">
                <div class="w-[332px]">
                    <h3 class="text-2xl">Social Media Content Plan</h3>
                    <p class="text-[#555] mt-2">consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
                </div>
            </div>
            <div class="flex justify-between">
                <img :src="nishon" alt="">
                <div class="w-[332px]">
                    <h3 class="text-2xl">Social Media Content Plan</h3>
                    <p class="text-[#555] mt-2">consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
                </div>
            </div>
        </div>

    </div>
    <!-- Our bulletproof ----------------------------------------------------------- -->


</template>
<script>
import SwiperBlok from '../components/SwiperBlok.vue'
import image24 from '..//assets/img/Image (24).png'
import nishon from '..//assets/img/nishon.png'
export default {
    components:{
        SwiperBlok,
    },
    data() {
        return {
            image24,
            nishon,
        }
    },
}
</script>
<style >
.our{
  background:linear-gradient(111deg, #E9F7FF 9.66%, #FFDBD4 57.52%, #FFF3CA 103.42%);
}
.checkbox input{
    border-radius: 50px;
    color: #292930;
    margin-right: 5px;
}


 
</style>