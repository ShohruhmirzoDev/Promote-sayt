<template>
     <!-- Footer =================================================================== -->
     <div class="w-full xl:h-[1000px] h-auto xl:pt-0 pt-20   text-white bg-[#292930]  flex justify-center items-center">
        <div class="md:w-[1200px] xl:h-[652px] h-auto md:px-0 px-5 flex flex-wrap xl:justify-between justify-center">
            <!-- Footer logo qism --------------------------------- -->
            <div class="w-[399px] h-full py-[49px] px-[53px] bg-[#3C3C45] rounded-lg xl:mr-0 mr-5">
                <img :src="logo" alt="">
                <img :src="logo2" alt="">
                <h3 class="text-2xl">Subscribe now</h3>
                <p class="text-[#D0D0D0]">Industry's standard from dummy and make a type  book.</p>
                <!-- input ----------- -->
                <div class="form-control">
                <input type="value" required="">
                <label>
                    <span style="transition-delay:0ms">U</span>
                    <span style="transition-delay:50ms">s</span>
                    <span style="transition-delay:100ms">e</span>
                    <span style="transition-delay:150ms">r</span>
                    <span style="transition-delay:200ms">n</span>
                    <span style="transition-delay:250ms">a</span>
                    <span style="transition-delay:300ms">m</span>
                    <span style="transition-delay:350ms">e</span>
                    <span style="transition-delay:400ms">.</span>
                    <span style="transition-delay:450ms">.</span>
                    <span style="transition-delay:500ms">.</span>
                </label>
            </div>
            <!-- /input ------------------------ -->
            <button class="bg-[#FFDC60] w-[293px] h-[62px] text-black rounded-lg">Subscribe</button>
            </div>
            <!-- /Footer logo qism --------------------------------- -->
            <!-- Footer menu qism ----------------------------------- -->
            <div class="md:w-[702px] h-full xl:mt-0 mt-12">
                <!-- aloqa qism -------------------- -->
                <div class=" flex md:justify-between justify-center flex-wrap">
                    <div class="w-[255px] h-[152px] md:mb-0 mb-5">
                        <p class="flex"><img :src="vector1" class="mr-1"> Get in touch with</p>
                        <p class="my-4 py-[12px] px-[32px] bg-[#3C3C45] rounded-md text-2xl text-[#FFDC60]">+998 88 825 4300</p>
                        <p> nextlevel@marketing.com</p>
                    </div>
                    <div class="w-[297px] h-[152px] md:ml-0 ml-10">
                        <p class="text-2xl flex"><img :src="icon26" class="mr-1"> Location</p>
                        <p class="my-4">10 Suna House 65 Rivington Street London EC2A 3QQ</p>
                        <p class="text-[#FFDC60]"><u>location</u></p>
                    </div>
                </div>
                <!-- /aloqa qism -------------------- -->
                <hr class="my-[50px]">
                <!-- Menu qism ------------------------------------ -->
                <div class="md:w-[642px] h-[288px] flex justify-between flex-wrap">
                    <!-- 1 ------------------ -->
                    <div class="w-[120px] h-full">
                        <h2 class="flex"><img :src="icon27" class="mr-1"> Pages</h2>
                        <p class="mt-4">Home</p>
                        <p class="mt-2">About</p>
                        <p class="my-2">Blog</p>
                        <p>Pricing Single</p>
                        <p class="my-2">Contact</p>
                        <p>Services</p>
                    </div>
                    <!-- 2  ----------------- -->
                    <div class="w-[183px] h-full">
                        <h2 class="flex"><img :src="icon28" class="mr-1"> Uitility Pages</h2>
                        <p class="mt-4">Styleguide</p>
                        <p class="mt-2">404 Not Found</p>
                        <p class="my-2">Password Protected</p>
                        <p>Licenses</p>
                        <p class="my-2">Changelog</p>
                    </div>
                    <!-- 3  ---------------------- -->
                    <div class="w-[117px] h-full">
                        <h2 class="flex"><img :src="icon29" class="mr-1"> Follows</h2>
                        <p class="mt-4">Facebook</p>
                        <p class="mt-2">Twitter</p>
                        <p class="my-2">Instagram</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
                <!-- /menu qism ------------------------------- -->
                <hr class="mt-[50px]">
                <div class="text-center mt-2">
                    <p>Copyright © Nextlevel | Designed by VictorFlow - Powered by Webflow</p>
                </div>
            </div>
        </div>
    </div>
    <!-- /Footer =================================================================== -->

</template>
<script>
import logo from '../assets/img/Logo (5).png';
import logo2 from '..//assets/img/Logo (7).png';
import vector1 from '..//assets/icon/Vector (1).svg'
import icon26 from '../assets/icon/Icon (26).svg'
import icon27 from '../assets/icon/Icon (27).svg'
import icon28 from '../assets/icon/Icon (28).svg'
import icon29 from '../assets/icon/Icon (29).svg'
export default {
    data() {
        return {
            logo,
            logo2,
            vector1,
            icon26,
            icon27,
            icon28,
            icon29,
        }
    },
}
</script>
<style scoped>
    ::placeholder{color: white;}

    .form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 293px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  color: #fff;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus+label span,
.form-control input:valid+label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>