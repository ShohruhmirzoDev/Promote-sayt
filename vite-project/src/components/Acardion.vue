<template >
    
<div id="accordion-color" data-accordion="collapse" data-active-classes="bg-[#383840] dark:bg-gray-800 text-blue-600 dark:text-black rounded-md">
    <h2 id="accordion-color-heading-2" class="bg-[#383840] rounded-md">
    <button type="button" class="flex items-center  justify-between  h-[120px] w-full p-5 font-medium text-left text-gray-500   " data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
      <span class="text-3xl">Online Media Management</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-2" class="hidden bg-[#383840] " aria-labelledby="accordion-color-heading-2">
    <div class="p-5  ">
      <p class="mb-2 text-gray-">Flowbite is first conceptualized and designed using the  Figma file.</p>
      <p class="text-gray-">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based  from Flowbite.</p>
    </div>
  </div>
  <div class="my-8">
    <h2 id="accordion-color-heading-1" class="bg-[#383840] rounded-t-md">
    <button type="button" class="flex items-center justify-between w-full  h-[120px] p-5 text-left text-gray-500   rounded-t-xl " data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1"> 
      <span class="text-3xl">Experiential Marketing</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-1" class="hidden bg-[#383840] rounded-b-md" aria-labelledby="accordion-color-heading-1">
    <div class="p-5   dark:bg-gray-900">
      <p class="mb-2 text-gray-">Flowbite is navbars, and more.</p>
      <p class="text-gray-">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a>components on top of Tailwind CSS.</p>
    </div>
  </div>
  </div>
  
  <h2 id="accordion-color-heading-3" class="bg-[#383840] rounded-md">
    <button type="button" class="flex items-center justify-between w-full h-[120px] p-5 font-medium text-left text-gray-500   " data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
      <span class="text-3xl">Email Marketing </span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-color-body-3" class="hidden bg-[#383840]" aria-labelledby="accordion-color-heading-3">
    <div class="p-5 ">
      <p class="mb-2 text-gray-">The main difference Flowbite are open source under the MIT .</p>
      <p class="mb-2 text-gray-">However,  Flowbite Pro, and even  worlds.</p>
      <p class="mb-2 text-gray-">Learn more about these technologies:</p>
    </div>
  </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style >
    
</style>