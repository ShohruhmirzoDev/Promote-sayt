<template >
    <div class="bacgk  mx-auto md:w-full h-1000px]">
        
    </div>
    <!-- Browse our ------------------------------------------------------- -->
    <div class="xl:w-[1200px] xl:h-[126px] h-auto my-20 mx-auto flex xl:justify-between justify-center items-center flex-wrap">
        <div class="md:w-[541px] flex justify-between xl:mb-0 mb-8">
            <img :src="icon34" class="w-[88px]">
            <div class="ml-5">
                <p>// 01 . Articles</p>
                <h3 class="text-4xl">Browse our content on growth marketing</h3>
            </div>
        </div>
        <div class="md:w-[490px] h-[62px]">
            <input type="search" class="md:w-[350px] h-[62px] mr-[20px] rounded-xl" placeholder="Search the blog...">
            <button class="py-[16px] h-[62px] px-[32px] rounded-xl ">Search</button>
        </div>
    </div>
    <!-- /Browse our ------------------------------------------------------- -->

      <!--   How   1 rangli blok ---------==================================--- -->
      <div class="xl:w-[1200px] mx-auto xl:h-[480px] xl:py-0 py-12 h-auto md:px-0 px-5  bg-[#FFF3CA] rounded-lg my-12 flex justify-center items-center flex-wrap">
            <div class="xl:w-[1019px] xl:h-[310px] h-auto flex gap-8 xl:justify-between justify-center flex-wrap">
                <!-- 1 blok ------------------- -->
                <div class="md:w-[470px] h-full xl:mb-0 mb-8">
                    <div class="flex justify-between">
                        <button class="w-[123px] h-[43px] flex items-center justify-center rounded-full border-2">Marketing</button>
                        <p>September 1, 2022</p>
                    </div>
                    <div class="my-5">
                        <h3 class="text-2xl mb-2">How to increase your Twitter reach by over 200% with this simple trick</h3>
                        <p>Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. </p>
                    </div>
                    <div class="md:text-left text-center">
                        <button class="py-[17px] px-[23px] md:mx-0 mx-auto bg-white text-black rounded-xl">Read More <i class='bx bxs-chevron-left bx-rotate-180' style='color:#0800ff' ></i></button>
                    </div>
                </div>
                <!-- img =--------------------- -->
                <div class="">
                    <img :src="image21" alt="">
                </div>
            </div>
        </div>

        <!-- Subscribe to-------------------------------------------------------- -->
        <div class="w-full h-[500px] bg-[#292930] flex justify-center items-center">
            <div class="w-[592px] h-[162px] flex flex-wrap justify-center items-center">
                <h1 class="text-[45px] text-center">Subscribe to our <span class="text-[#FFDC60]">newsletter</span></h1>
                <div class="">
                    <input type="email" class="bg-[#5B5B61] text-white h-[58px] rounded-md" placeholder="Enter Your Email...">
                    <button class="bg-[#FFDC60] py-[16px] px-[32px] ml-5 rounded-md">Subscribe</button>
                </div>
            </div>
        </div>
        <!-- /Subscribe to-------------------------------------------------------- -->
        <!-- Latest posts ------------------------------------------------------ -->
        <LatestBtn />

        <div class="w-[1200px] h-[1329px] mx-auto flex flex-wrap">
            <div class="blog w-[574px] h-[639px] py-[43px] px-[37px] rounded-[30px]">
                <img :src="img25" alt="">
                <div class="flex justify-between items-center my-[25px]">
                    <button class="py-[8px] px-[20px] rounded-full border-2 border-zinc-800">Marketing</button>
                    <p class="text-[15px]">September 1, 2022</p>
                </div>
                    <h2 class="text-2xl">How to increase your Twitter reach by over 200% with this simple trick   
                    </h2>
            </div>
            <div class="blog w-[574px] h-[639px] py-[43px] px-[37px] rounded-[30px]">
                <img :src="img25" alt="">
                <div class="flex justify-between items-center my-[25px]">
                    <button class="py-[8px] px-[20px] rounded-full border-2 border-zinc-800">Marketing</button>
                    <p class="text-[15px]">September 1, 2022</p>
                </div>
                    <h2 class="text-2xl">How to increase your Twitter reach by over 200% with this simple trick   
                    </h2>
            </div>
            <div class="blog w-[574px] h-[639px] py-[43px] px-[37px] rounded-[30px]">
                <img :src="img25" alt="">
                <div class="flex justify-between items-center my-[25px]">
                    <button class="py-[8px] px-[20px] rounded-full border-2 border-zinc-800">Marketing</button>
                    <p class="text-[15px]">September 1, 2022</p>
                </div>
                    <h2 class="text-2xl">How to increase your Twitter reach by over 200% with this simple trick   
                    </h2>
            </div>
            <div class="blog w-[574px] h-[639px] py-[43px] px-[37px] rounded-[30px]">
                <img :src="img25" alt="">
                <div class="flex justify-between items-center my-[25px]">
                    <button class="py-[8px] px-[20px] rounded-full border-2 border-zinc-800">Marketing</button>
                    <p class="text-[15px]">September 1, 2022</p>
                </div>
                    <h2 class="text-2xl">How to increase your Twitter reach by over 200% with this simple trick   
                    </h2>
            </div>
        </div>
        <!-- /Latest posts ------------------------------------------------------ -->
</template>
<script>
import icon34 from '../assets/icon/Icon (34).svg';
import image21 from '..//assets/img/Image (21).png';
import img25 from '..//assets/img/Image (25).png';
import LatestBtn from '../components/LatestBtn.vue'
export default {
    components:{
        LatestBtn
    },
    data() {
        return {
            icon34,
            image21,
            img25,
        }
    },
}
</script>
<style >
    .bacgk {
        background: url(../assets/img/blog.jpg);
        background-size:cover;
        background-position: center;
        padding: 900px 0 0 0;
    }
    .blog:hover{ 
        background: linear-gradient(124deg, #E9F7FF 5.58%, #FFDBD4 21.8%, #FFF3CA 37.36%);
    }
    
    
</style>