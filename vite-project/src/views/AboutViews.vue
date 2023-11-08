<template>
    <div class="">
        <div class="bag  mx-auto md:w-full h-[1000px]">
        
        </div>
    </div>

    <div class="w-full h-[250px] bg-[#292930] flex justify-center items-center">
        <div class="flex justify-between items-center flex-wrap xl:w-[1180px] text-white">
            <div class="w-[227px] h-[46px] flex flex-wrap">
                    <p class="text-4xl">325<span class="text-[#5956E8] ">+</span></p>
                    <span class="text-[#D0D0D0] text-[15px] w-[80px] ml-5 ">Clients Worldwide</span>
                </div>
                <div class="w-[227px] h-[46px] flex flex-wrap">
                    <p class="text-4xl">975<span class="text-[#fb3a3a] ">+</span></p>
                    <span class="text-[#D0D0D0] text-[15px] w-[80px] ml-5 ">Clients Worldwide</span>
                </div>
                <div class="w-[227px] h-[46px] flex flex-wrap">
                    <p class="text-4xl">70<span class="text-[#fbff00] ">+</span></p>
                    <span class="text-[#D0D0D0] text-[15px] w-[80px] ml-5 ">Clients Worldwide</span>
                </div>
                <div class="w-[170px] h-[46px] flex flex-wrap">
                    <p class="text-4xl">85<span class="text-[#2bff00] ">+</span></p>
                    <span class="text-[#D0D0D0] text-[15px] w-[80px] ml-5 ">Clients Worldwide</span>
                </div>
        </div>
    </div>

    <!-- The # 1 =------------------------------------------------------------------ -->
    <div class="px-5 xl:w-[1200px] h-auto xl:h-[861px] md:mt-[141px] mt-[40px] mx-auto flex justify-center items-center flex-wrap">
        <div class="md:w-[676px] md:ml-[-180px] ml-0 h-full">
            <img :src="graps" class="w-full">
        </div>
        <div class="md:w-[653px] h-full px-5">
            <div class="flex w-full justify-center md:justify-start">
                <div class=""><img :src="icon17" class=""></div>
                <div class="ml-5">
                    <p>// 02 . About Us</p>
                    <p class="md:text-4xl text-2xl">The #1 digital marketing <br>  services company</p>
                </div>
            </div>
            <div class="text-[#555]  md:px-0 my-14">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                ftyuu Ipsum has been the industry's standard book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            </div>
            <div class="">
                <div class="mb-8 md:w-[570px] h-[123px] flex  justify-center items-center">
                <img :src="icon18"  class="w-[86px]">
                <div class="ml-5">
                    <p class="text-2xl mb-6">Guaranteed Results</p>
                    <p class="text-[#555]">Lorem Ipsum is simply dummy text of the printing <br> and typesetting industry.</p>
                </div>
            </div>
            <div class="md:w-[570px] h-[123px] flex  justify-center items-center">
                <img :src="icon18" class="w-[86px]">
                <div class="ml-5">
                    <p class="text-2xl mb-6">Team of Industry Experts</p>
                    <p class="text-[#555]">Lorem Ipsum is simply dummy text of the printing <br> and typesetting industry.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!-- /The # 1 =------------------------------------------------------------------ -->
   
    <!-- The core ------------------------------------------------------------------- -->
    <div class="w-full xl:h-[1153px] h-auto xl:py-0 py-12 md:px-0 px-5 bg-[#292930] text-white flex flex-wrap justify-center items-center">
        <div class="text-center">
            <img :src="icon30" class="mx-auto">
            <p class="my-5">// 02 . OUR VALUES</p>
            <h1 class="text-[40px]">The core values behind our work</h1>
        </div>
        <!-- swiper qism=============== -->
        
        <div class="xl:w-[1200px] xl:mt-0 mt-10 xl:h-[477px] h-auto flex flex-wrap xl:justify-between justify-center xl:gap-0 gap-5">
            <SwiperBlok />
            <SwiperBlok />
            <SwiperBlok />
        </div>
        <!-- swiper qism=============== -->

        <div class="w-[377px] h-[64px] flex justify-between xl:mt-0 mt-10">
            <button class="py-[17px] px-[35px] border-2  hover:bg-black hover:text-white hover:border-none border-white rounded-xl">Get in touch</button>
            <button class=" py-[17px] px-[35px] rounded-xl border-[#fff] border-[2px] text-[#fff] hover:bg-black hover:text-white hover:border-none">Read More <i class='bx bxs-chevron-right-circle ml-2 ' style='color:#5858de'></i>
            </button>
        </div>
    </div>

    <!-- The core ------------------------------------------------------------------- -->
   
    <!-- Our team of --------------------------------------------------------------- -->
    <div class="xl:h-[839px] h-auto mx-auto xl:w-[1200px] md-px-0 px-5 xl:my-[150px] md:my-[80px] my-[40px]">
        <div class="text-center">
            <img :src="icon31" class="mx-auto">
            <p class="my-5">// 02 . OUR VALUES</p>
            <h1 class="text-[40px]">The core values behind our work</h1>
        </div>
        <div class="flex xl:justify-between justify-center  flex-wrap mt-8 xl:gap-0 gap-5">
            <!-- 3- blok ================================= -->
            <div class="our-team w-[380px] h-[573px] text-center px-[25px] pt-[25px] pb-[50px] rounded-3xl border-[#DCDCDC] border-2">
                <img :src="image22" class="">
                <div class="w-[80px] h-1 rounded-full mx-auto my-8 border-[#5956E8] bg-[#5956E8]">
                </div>
                <h1 class="text-2xl font-bold">Pippa	Clarkson</h1>
                <p class="text-[#555]">Lead Manager</p>
                <div class="text-3xl mt-5">
                    <i class='bx bxl-facebook-circle' style='color:#095adf'  ></i>
                    <i class='bx bxl-twitter mx-2' style='color:#095adf' ></i>
                </div>
            </div>
            <div class="our-team w-[380px] h-[573px] text-center px-[25px] pt-[25px] pb-[50px] rounded-3xl border-[#DCDCDC] border-2">
                <img :src="image22" class="">
                <div class="w-[80px] h-1 rounded-full mx-auto my-8 border-[#5956E8] bg-[#5956E8]">
                </div>
                <h1 class="text-2xl font-bold">Pippa	Clarkson</h1>
                <p class="text-[#555]">Lead Manager</p>
                <div class="text-3xl mt-5">
                    <i class='bx bxl-facebook-circle' style='color:#095adf'  ></i>
                    <i class='bx bxl-twitter mx-2' style='color:#095adf' ></i>
                </div>
            </div>
            <div class="our-team w-[380px] h-[573px] text-center px-[25px] pt-[25px] pb-[50px] rounded-3xl border-[#DCDCDC] border-2">
                <img :src="image22" class="">
                <div class="w-[80px] h-1 rounded-full mx-auto my-8 border-[#5956E8] bg-[#5956E8]">
                </div>
                <h1 class="text-2xl font-bold">Pippa	Clarkson</h1>
                <p class="text-[#555]">Lead Manager</p>
                <div class="text-3xl mt-5">
                    <i class='bx bxl-facebook-circle' style='color:#095adf'  ></i>
                    <i class='bx bxl-twitter mx-2' style='color:#095adf' ></i>
                </div>
            </div>
            <!-- 3- blok ================================= -->
        </div>
    </div>
    <!-- Our team of --------------------------------------------------------------- -->


    <!-- Come and ----------------------------------------------------------------- -->
        <div class="come w-full xl:h-[849px] h-auto flex flex-wrap justify-center items-center">
            <div class="px-5 xl:px-0 mt-20 xl:w-[1200px]  xl:h-[128px] h-auto mx-auto flex justify-between items-end flex-wrap">
        <div class="md:w-[612px] h-full flex">
            <div class="">
                <img :src="icon32" class="w-[88px]">
            </div>
            <div class="md:w-[485px] ml-8">
                <p>// 04 . OUR OFFICES</p>
                <h2 class="text-4xl mt-4">Come and visit us all around the world</h2>
            </div>
        </div>

        <div class="w-[159px] flex xl:mx-0 mx-auto xl:my-0 my-8">
            <button class="py-[17px] px-[28px] bg-black text-white rounded-lg">Get in touch</button>
        </div>

    </div>
    <!-- yarmi =================================== -->
    <div class="w-[1200px] xl:h-[370px] h-auto xl:gap-0 gap-5 xl:my-0 my-8 flex xl:justify-between justify-center flex-wrap">
        <div class="w-[378px] h-[370px] py-[50px] px-[31px] bg-white rounded-3xl">
            <img :src="image55" class="">
            <p class="text-2xl my-3">San Francisco, USA</p>
            <p class="text-[#555]  text-xl">1650 Page. San Francisco,California(CA), 94117</p>
            <p  class="text-[#555] text-xl flex my-3"><img :src="tel" class="mr-2"> (414) 809 - 2567</p>
            <p class="text-[#555] text-xl flex"><img :src="icon33" class="mr-2"> Contact@marketingagency.com</p>
        </div>
        <div class="w-[378px] h-[370px] py-[50px] px-[31px] bg-white rounded-3xl">
            <img :src="image55" class="">
            <p class="text-2xl my-3">San Francisco, USA</p>
            <p class="text-[#555]  text-xl">1650 Page. San Francisco,California(CA), 94117</p>
            <p  class="text-[#555] text-xl flex my-3"><img :src="tel" class="mr-2"> (414) 809 - 2567</p>
            <p class="text-[#555] text-xl flex"><img :src="icon33" class="mr-2"> Contact@marketingagency.com</p>
        </div>
        <div class="w-[378px] h-[370px] py-[50px] px-[31px] bg-white rounded-3xl">
            <img :src="image55" class="">
            <p class="text-2xl my-3">San Francisco, USA</p>
            <p class="text-[#555]  text-xl">1650 Page. San Francisco,California(CA), 94117</p>
            <p  class="text-[#555] text-xl flex my-3"><img :src="tel" class="mr-2"> (414) 809 - 2567</p>
            <p class="text-[#555] text-xl flex"><img :src="icon33" class="mr-2"> Contact@marketingagency.com</p>
        </div>
    </div>

    </div>
    <!-- Come and ----------------------------------------------------------------- -->
</template>
<script>
import graps from '../assets/img/Graps3png.png';
import icon17 from '../assets/icon/Icon (17).svg';
import icon18 from '../assets/icon/Icon (18).svg';
import icon30 from '../assets/icon/Icon (30).svg';
import icon31 from '../assets/icon/Icon (31).svg';
import icon32 from '../assets/icon/Icon (32).svg';
import icon33 from '../assets/icon/Icon (33).svg';
import SwiperBlok from '..//components/SwiperBlok.vue';
import image22 from '../assets/img/Image (22).png';
import image55 from '..//assets/img/image 55.png';
import tel from '../assets/icon/Vector (2).svg';
export default {
    components:{
        SwiperBlok,
    },
    data() {
        return {
            graps,
            icon17,
            icon18,
            icon30,
            icon31,
            icon32,
            icon33,
            image22,
            image55,
            tel,
        }
    },
}
</script>
<style scoped>
    .bag {
        background: url(../assets/img/Banner2.jpg);
        background-size:cover;
        background-position: center;
        padding: 150px 0 0 0;
    }
    .our-team:hover{
        background: linear-gradient(111deg, #E9F7FF 9.66%, #FFDBD4 57.52%, #FFF3CA 103.42%);
    }
    .come{
        background: linear-gradient(111deg, #E9F7FF 9.66%, #FFDBD4 57.52%, #FFF3CA 103.42%);
    }
</style>