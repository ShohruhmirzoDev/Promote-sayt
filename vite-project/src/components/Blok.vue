<template>
    <div class="blok w-[352px] h-[475px] py-[41px] px-[39px] border-[#424245] border-[1px] rounded-3xl">
        <img :src="icon" alt="">
        <p class="text-[25px] my-5">Social Media Marketing</p>
        <p class="text-[#D0D0D0] text-lg">Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. </p>
        <button class=" my-5 py-[17px] px-[80px] rounded-lg border-[#535355] border-[1px] text-[#535355] hover:bg-yellow-400 hover:text-black">Read More <i class='bx bxs-chevron-right-circle ml-2 ' style='color:#525255'></i>
        </button>
    </div>  
</template>
<script>
import icon from '..//assets/img/icon.png'
export default {
    data() {
        return {
            icon,
        }
    },                                          
}
</script>               
<style scoped >
        .blok{
        background: linear-gradient(180deg, #36363E 0%, #292930 100%);
    }
</style>