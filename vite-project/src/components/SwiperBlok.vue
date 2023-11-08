<template>
    <div class="blok w-[352px] h-[475px] py-[41px] px-[39px] text-center border-[#424245] border-[1px] rounded-3xl">
        <img :src="icon" class="mx-auto">
        <p class="text-[25px] my-5">Efficiency</p>
        <p class="text-[#D0D0D0] text-lg">Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm. </p>
        <button class="w-[80px] h-1 border-2 border-white mt-10 bg-white"></button>
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