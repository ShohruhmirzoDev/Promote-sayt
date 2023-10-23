<template>
  <nav class=" border-gray-200 dark:border-gray-700 w-full  mx-auto ">
    <div class="md:w-[1200px] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <a href="#" class="flex items-center">
        <RouterLink to="/"><img :src="logo" class=" w-[211px]" alt="" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-500 dark:text-white"> </span>
        </RouterLink>
      </a>

      <button data-collapse-toggle="navbar-multi-level" type="button"
        class="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <!-- menu qism ------------------------------------------------------------------- -->
      <div class=" slider-buttons hidden w-full md:block md:w-auto md:bg-inherit bg-white" id="navbar-multi-level">
        <ul
          class="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li class="swiper-button-next">
            <a href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page">
              <RouterLink to="/"> Home </RouterLink>
            </a>
          </li>
          <li class="swiper-button-next">
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <RouterLink to="/about"> About Us </RouterLink>
            </a>
          </li>
          <li class="swiper-button-next">
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <RouterLink to="/services"> Services </RouterLink>
            </a>
          </li>
          <!-- -----+-+=--+=--=--+=--+-=+-- =+--=+--+=---=+--=--+=--+=--=+--+=--+=-+--=+--+=--+=-+--=+--=+ -->
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
              Pages <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink to="/price">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Price Packs </a>
                  </RouterLink>
                </li>
                <li aria-labelledby="dropdownNavbarLink">
                  <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start" type="button"
                    class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg
                      class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                    </svg></button>
                  <div id="doubleDropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                      <li>
                        <RouterLink to="/faq">
                          <a href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
                            Faq </a>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/tortyuz">
                          <a href="#"
                            class="block pl-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">404
                            error</a>
                        </RouterLink>
                      </li>
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                      </li>
                      <li>
                        <a href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <RouterLink to="/team">
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Team </a>
                  </RouterLink>
                </li>
              </ul>

            </div>
          </li>
          <!-- ===============+-+-=--+=--+-=+--=+--=+--+=--+=-+--=+--+=--+=-+--=+--+=-+--=+--=+--+=--+= -->

          <li class="swiper-button-next">
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <RouterLink to="/blog"> Blog </RouterLink>
            </a>
          </li>
          <li class="swiper-button-next">
            <a href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <RouterLink to="/contact"> Login </RouterLink>
            </a>
          </li>
          <li>
            <button class="btn py-[17px] px-[39px] bg-[#000000] rounded-lg text-white">Get Consulting</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script >
import logo from '../assets/img/Logo (6).png';


export default {
  data() {
    return {
      logo,
    }
  },
}
</script>
<style scoped>
nav{
  margin: 0 auto;
  background-color: rgba(222, 220, 220, 0.454);
  backdrop-filter: blur(5px);
  z-index: 100;
}
ul li {
  margin: 15px;
  font-size: 18px;
}

.btn:hover {
  background-color: rgb(3, 46, 237);
}

.swiper-button-next,
.swiper-button-prev {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: rgb(0, 0, 0);
  position: relative;
  margin-left: 4px;
}

.swiper-button-next:before,
.swiper-button-prev:before {
  content: "";
  position: absolute;
  background-color: rgb(4, 50, 255);
  height: 1.5px;
  width: 0;
  left: 0;
  bottom: -1px;
  transition: 0.2s;
}

.swiper-button-next:hover:before,
.swiper-button-prev:hover:before {
  width: 100%;
}



@media screen and (max-width: 520px) {

  .swiper-button-next:hover:before,
  .swiper-button-prev:hover:before {
    display: none;
  }
}</style>