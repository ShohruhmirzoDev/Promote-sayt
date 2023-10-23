<template>
    <div class=" mx-auto hombag md:w-full h-[1000px]">
        <div class="">
            
        </div>
        <div class=" px-5 xl:w-[1200px] mx-auto flex items-center">
            <div class="w-[740px] h-[470px] ">
                <p class="text-[#292930]"> <span class="text-[#FEC90C]">//</span> Agency</p>
                <font class= "md:text-[70px] text-[50px]">A fully integrated digital<span class="text-[#5956E8]">  marketing</span> agency</font>
                <p class="text-[#555]">Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret <br> brreprehendunt ius ex. Ut vis mazim erroribus forensibus.</p>
                <div class="flex mt-5 ">
                    <button class="px-[39px] py-[17px] mr-2 bg-black border-2 border-black text-white rounded-lg">Our Services</button>
                    <button class="px-[39px] py-[17px] border-2 border-black text-black rounded-lg hover:bg-black hover:text-white">Get Started</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bloklar qismi -----------------===----------------------------------------- -->
    <div class="py-5 w-full xl:h-[1575px] h-auto text-white bg-[#292930] flex justify-center items-center">
        <div class="xl:w-[1200px] w-full  xl:h-[1233px] h-auto">
            <div class="md:px-0 px-5 w-full mb-20 md:h-[126px] h-auto flex 2xl:justify-between justify-center items-end flex-wrap">
                <div class="w-[747px] h-full flex justify-between">
                     <div class="w-[120px]"><img :src="iconsozlama" alt=""></div>
                     <div class="ml-5">
                        <p>Services</p>
                        <p class="text-[35px]">High-impact services to take your business to the next level</p>
                     </div>
                </div>
                <div class="md:mt-0 mt-5">
                    <button class="py-[18px] px-[28px] rounded-lg bg-white text-black">Our Services <i class='bx bxs-chevron-right-circle ml-1 ' style='color:#2a46e3'  ></i></button>
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
    <!-- The # 1 =------------------------------------------------------------------ -->
    <div class="px-5 xl:w-[1200px] h-auto xl:h-[861px] md:mt-[141px] mt-[40px] mx-auto flex justify-center items-center flex-wrap">
        <div class="md:w-[676px] md:ml-[-180px] ml-0 h-full">
            <img :src="image" alt="" class="w-full">
        </div>
        <div class="md:w-[653px] h-full px-5">
            <div class="flex w-full justify-center md:justify-start">
                <div class=""><img :src="icon17" alt=""></div>
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
                <img :src="icon18" alt="" class="w-[86px]">
                <div class="ml-5">
                    <p class="text-2xl mb-6">Guaranteed Results</p>
                    <p class="text-[#555]">Lorem Ipsum is simply dummy text of the printing <br> and typesetting industry.</p>
                </div>
            </div>
            <div class="md:w-[570px] h-[123px] flex  justify-center items-center">
                <img :src="icon18" alt="" class="w-[86px]">
                <div class="ml-5">
                    <p class="text-2xl mb-6">Team of Industry Experts</p>
                    <p class="text-[#555]">Lorem Ipsum is simply dummy text of the printing <br> and typesetting industry.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    <!-- /The # 1 =------------------------------------------------------------------ -->

    <!-- A simple ------------------------------------------------------------------=- -->
    <div class="simple mt-20 xl:w-[1200px] xl:h-[1444px] py-8 h-auto mx-auto flex justify-center items-center flex-wrap">
        <div class="w-[525px] h-[250px] mb-10">
            <img :src="icon19" class="mx-auto">
            <p class="text-center my-8">// 03 . Proccess</p>
            <h2 class="text-4xl text-center">A simple, yet powerful and  efficient process</h2>
        </div>

        <div class=" content1 w-full h-[857px] ">
            
        </div>

    </div>
    <!-- /A simple -----------------------------------------------------------------=- -->
   
    <!-- WE Work ------------------------------------------------------------------- -->
    <div class="px-5 xl:px-0 mt-20 xl:w-[1200px] xl:h-[128px] h-auto mx-auto flex justify-between items-end flex-wrap">
        <div class="md:w-[612px] h-full flex">
            <div class="">
                <img :src="icon20" alt="">
            </div>
            <div class="md:w-[485px] ml-8">
                <p>// 04 . Testimonial</p>
                <h2 class="text-4xl">We work with customers across all industries</h2>
            </div>
        </div>

        <div class="w-[168px] flex xl:mx-0 mx-auto xl:my-0 my-8">
            <button class="w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-md text-3xl hover:bg-black mr-3"><i class='bx bxs-chevron-right bx-rotate-180' style='color:#7e7171'  ></i></button>
            <button class="w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-md text-3xl hover:bg-black mr-5"><i class='bx bxs-chevron-left bx-rotate-180' style='color:#7e7171' ></i></button>
        </div>

    </div>
    <!-- buni yarmi -----------------------------------------------------==--======== -->
    <div class="xl:w-[1200px] mt-10 xl:h-[418px] h-auto flex justify-between flex-wrap mx-auto">
        <div class="company md:w-[586px] h-full px-[26px] py-[32px] rounded-md xl:mb-0 mb-8 xl:mx-0 mx-auto">
            <div class="md:w-[534px] h-[257px] bg-white py-[48px] px-[37px] rounded-md shadow-md">
                <div class="flex justify-between mb-[20px]">
                    <img :src="company" alt="">
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <p>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. </p>
            </div>

            <div class="w-full h-[60px] flex mt-[37px] items-center">
                <img :src="profil" alt="">
                <div class="ml-5">
                <p class="font-bold  bg-gradient-to-br from-green-700 to-yellow-400 text-transparent bg-clip-text">John Carter</p>
                <p>Marketing Lead at Google</p>
                </div>
            </div>
        </div>
        <!--  yarmi -------------------------------------------------------------- -->
        <div class="company md:mt-0 mt-10 md:w-[586px] h-full px-[26px] py-[32px] rounded-md xl:mx-0 mx-auto">
            <div class="md:w-[534px] h-[257px] bg-white py-[48px] px-[37px] rounded-md shadow-md">
                <div class="flex justify-between mb-[20px]">
                    <img :src="company2" alt="">
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <p>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. </p>
            </div>

            <div class="w-full h-[60px] flex mt-[37px] items-center">
                <img :src="profil" alt="">
                <div class="ml-5">
                <p  class="font-bold bg-gradient-to-br from-green-700 to-yellow-400 text-transparent bg-clip-text">John Carter</p>
                <p>Marketing Lead at Google</p>
                </div>
            </div>
        </div>
    </div>
    <!-- /WE Work ------------------------------------------------------------------- -->

    <!-- 1520 project Done =========================================================== -->

    <div class="w-full text-white xl:h-[1382px] xl:py-0 py-20 h-auto flex justify-center items-center xl:my-28 my-10 bg-[#292930] px-5 xl:px-0">
        <div class="xl:w-[1200px] w-full xl:h-[1060px] h-auto ">
            <!--  1 ======================================================== -->
            <div class="w-full md:h-[170px] h-auto flex justify-between items-center flex-wrap">
                <div class="flex">
                    <img :src="icon21" alt="" class="w-[88px] h-[88px] mr-8">
                    <div class="md:w-[718px] md:h-[170px] h-auto">
                        <p class="text-[#D0D0D0]">// 05 . CASE STUDIES</p>
                        <h2 class="text-4xl">1520 -Project Done. Browse our latest case study on Marketing Agency</h2>
                    </div>
                </div>
                <div class=" xl:mx-0 mx-auto md:mt-0 mt-5">
                    <button class="w-[205px] h-[62px] rounded-md text-lg flex justify-center items-center bg-white text-black">More cacestudys <span class="ml-2 flex justify-center items-center rounded-full bg-[#5956E8]"><i class='bx bxs-chevron-left bx-rotate-180' style='color:#ffffff' ></i></span></button>
                </div>
            </div>
            <!-- 2   ========================================================== -->
            <div class="w-full xl:h-[576px] h-auto flex flex-wrap xl:justify-between justify-center items-center my-[100px]">
                <!-- 1 - acardion ---------------------------->
                <div class="w-[559px] xl:mb-0 mb-8">
                    <Acardion />
                </div>
                <!-- 2 - img  ----------------------------->
                <div class="md:w-[614px]">
                    <img :src="image20" alt="">
                </div>
            </div>
            <!-- hr ---------------------------------------- -->
            <div class="w-full h-0.5 bg-[#5D5D63]"></div>
            <!-- 3  ============================================================== -->
            <div class="flex justify-between items-center flex-wrap md:gap-0 gap-5 mt-[68px]">
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
                <div class="w-[227px] h-[46px] flex flex-wrap">
                    <p class="text-4xl">85<span class="text-[#2bff00] ">+</span></p>
                    <span class="text-[#D0D0D0] text-[15px] w-[80px] ml-5 ">Clients Worldwide</span>
                </div>
            </div>
            <!-- tugadi ============== -->
        </div>
    </div>
    <!-- /1520 project Done =========================================================== -->

    <!-- Our Flexible =====================================================================-->
    <div class="xl:w-[1200px] xl:h-[798px] h-auto mx-auto ">
        <div class="text-center">
            <img :src="icon22" alt="" class="mx-auto">
            <p class="my-5">// 06 . Price & Plan</p>
            <h2 class="text-4xl">Our Flexible Pricing Plans</h2>
        </div>
        <div class="w-full xl:h-[554px] h-auto mt-[41px] flex xl:justify-between justify-center flex-wrap">
            <div class="w-[389px] h-full hover:bg-gray-900 hover:text-white py-[45px] px-[38px] flex justify-center bg-[#E2E2E2] text-black rounded-xl">
                <div class="card">
                    <div class="header">
						<span class="title">Beginner</span>
						<span class="price">$29</span>
					</div>
					<p class="desc"></p>
					<ul class="lists">
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
                        <li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
                        <li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" class="action">Get Started</button>
				</div>
            </div>
            <div class="w-[389px] md:my-0  hover:bg-gray-900 my-8 h-full py-[45px] px-[38px] flex justify-center bg-[#E2E2E2] rounded-xl">
                <div class="card">
                    <div class="header">
						<span class="title">Beginner</span>
						<span class="price">$29</span>
					</div>
					<p class="desc"></p>
					<ul class="lists">
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
                        <li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
                        <li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" class="action">Get Started</button>
				</div>
            </div>

            <div class="w-[389px] h-full  hover:bg-gray-900 py-[45px] px-[38px] flex justify-center bg-[#E2E2E2] rounded-xl">
                <div class="card">
                    <div class="header">
						<span class="title">Beginner</span>
						<span class="price">$29</span>
					</div>
					<p class="desc"></p>
					<ul class="lists">
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Aenean quis</span>
						</li>
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
                        <li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
                        <li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Morbi semper</span>
						</li>
						<li class="list">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span>Tristique enim nec</span>
						</li>
					</ul>
					<button type="button" class="action">Get Started</button>
				</div>
            </div>
        </div>
    </div>
    <!-- /Our Flexible =============================================================-->
    <!-- Benifit of  =========================================================== -->
    <div class="xl:w-[1200px] xl:h-[621px] h-auto mx-auto xl:my-[150px] my-[80px] xl:px-0 px-5 flex justify-between flex-wrap">
        <div class="w-[612px]">
            <div class=" h-[129px] flex">
                <div class="">
                <img :src="icon20" alt="">
                </div>
                <div class="md:w-[485px] ml-8">
                <p>// 07 . Benifits</p>
                <h2 class="text-4xl">Benifit of working with Maruncy</h2>
                </div>
            </div>
            <div class=" w-full h-[458px]">
                <img :src="graps" alt="" class="w-full shadow-2xl">
            </div>
        </div>
        <!-- yarmi -------------------------- -->
        <div class="md:w-[570px] h-[463px] xl:mt-0 mt-16">
            <div class=" h-[129px] flex">
                <div class="">
                <img :src="icon24" alt="">
                </div>
                <div class="md:w-[485px] ml-8">
                <p class="text-2xl">Page Rankings</p>
                <hr class="my-3">
                <h2 class="text-lg text-[#555]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                </div>
            </div>
            <div class=" h-[129px] flex my-8">
                <div class="">
                <img :src="icon24" alt="">
                </div>
                <div class="md:w-[485px] ml-8">
                <p class="text-2xl">Page Rankings</p>
                <hr class="my-3">
                <h2 class="text-lg text-[#555]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                </div>
            </div>
            <div class=" h-[129px] flex">
                <div class="">
                <img :src="icon24" alt="">
                </div>
                <div class="md:w-[485px] ml-8">
                <p class="text-2xl">Page Rankings</p>
                <hr class="my-3">
                <h2 class="text-lg text-[#555]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Benifit of  =========================================================== -->
    <hr class="xl:w-[1200px] mx-auto my-16">
    <!-- Browse our ================================================================= -->
    <div class="xl:w-[1200px] xl:h-[1395px] mb-8 h-auto mx-auto">
        <div class="text-center md:mx-0 mx-5">
            <img :src="icon25" alt="" class="mx-auto">
            <p class="my-5">// 08 . Articles</p>
            <h2 class="text-4xl">Browse our content on growth <br> marketing</h2>
        </div>
        
            <!--   How   1 rangli blok ---------==================================--- -->
        <div class="w-full xl:h-[480px] xl:py-0 py-12 h-auto md:px-0 px-5  bg-[#FFF3CA] rounded-lg my-12 flex justify-center items-center flex-wrap">
            <div class="xl:w-[1019px] xl:h-[310px] h-auto flex xl:justify-between justify-center flex-wrap">
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
                    <div class="">
                        <button class="py-[17px] px-[23px] bg-white text-black rounded-xl">Read More <i class='bx bxs-chevron-left bx-rotate-180' style='color:#0800ff' ></i></button>
                    </div>
                </div>
                <!-- img =--------------------- -->
                <div class="">
                    <img :src="image21" alt="">
                </div>
            </div>
        </div>
        <!--How    2 rangli blok ---------------================================----- -->
        <div class="w-full md:h-[480px] h-auto xl:py-0 py-12  md:px-0  px-5  bg-[#E9F7FF] rounded-lg my-12 flex justify-center items-center flex-wrap">
            <div class="xl:w-[1019px] md:h-[310px] h-auto flex xl:justify-between justify-center flex-wrap">
                <!-- img =--------------------- -->
                <div class="">
                    <img :src="image21" alt="">
                </div>
                <!-- 1 blok ------------------- -->
                <div class="md:w-[470px] h-auto xl:mb-0 mb-8">
                    <div class="flex justify-between">
                        <button class="w-[123px] h-[43px] flex items-center justify-center rounded-full border-2">Marketing</button>
                        <p>September 1, 2022</p>
                    </div>
                    <div class="my-5">
                        <h3 class="text-2xl mb-2">How to increase your Twitter reach by over 200% with this simple trick</h3>
                        <p>Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. </p>
                    </div>
                    <div class="">
                        <button class="py-[17px] px-[23px] bg-white text-black rounded-xl">Read More <i class='bx bxs-chevron-left bx-rotate-180' style='color:#0033ff' ></i> </button>
                    </div>
                </div>
            </div>
        </div>
        <div class=" text-center h-auto">
            <button class="py-[15px] px-[30px] bg-black text-white rounded-md">More articles  <i class='bx bxs-chevron-left-circle bx-rotate-180 ml-2 text-xl' ></i> </button>
        </div>
        </div>
    <!-- /Browse our ================================================================= -->
   
    <!-- Footer ============================ -->
   
   <!-- /Footer ============================ -->

</template>
<script>
import Navbar from '../components/Navbar.vue'
import Blok from '../components/Blok.vue'
import Acardion from '..//components/Acardion.vue'
import iconsozlama from '../assets/icon/iconSozlama.svg'
import image from '../assets/img/Image.png'
import icon17 from '../assets/icon/Icon (17).svg'
import icon18 from '../assets/icon/Icon (18).svg'
import icon19 from '../assets/icon/Icon (19).svg'
import icon20 from '../assets/icon/Icon (20).svg'
import icon21 from '../assets/icon/Icon (21).svg'
import icon22 from '../assets/icon/Icon (22).svg'
import company from '../assets/img/Company.png'
import profil from '..//assets/img/Image (19).png'
import company2 from '../assets/img/Company (1).png'
import image20 from '../assets/img/Image (20).png'
import icon23 from '../assets/icon/Icon (23).svg'
import icon24 from '../assets/icon/Icon (24).svg'
import icon25 from '../assets/icon/Icon (25).svg'
import graps from '../assets/img/Graps3png.png'
import image21 from '..//assets/img/Image (21).png'
export default {
    components:{
        Navbar,
        Blok,
        Acardion,
    },
    data() {
        return {
            iconsozlama,
            image,
            icon17,
            icon18,
            icon19,
            icon20,
            icon21,
            icon22,
            company,
            company2,
            profil,
            image20,
            icon23,
            icon24,
            icon25,
            graps,
            image21,
        }
    },
}
</script>
<style scoped>
    .hombag{
        background-image: url(../assets/img/banner.jpg);
        background-size: cover;
        background-position: center;
        padding: 150px 0 0 0;
    }
    @media (max-width: 768px){
        
    }
    .simple{
        background: linear-gradient(111deg, #E9F7FF 9.66%, #FFDBD4 57.52%, #FFF3CA 103.42%);
    }
    .content1{
        background-image: url(..//assets/img/content.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .company{
        background: linear-gradient(151deg, #FFF8F8 10.38%, #F5F7FF 95.44%);
    }



    .card {
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  color: #555;
  padding: 1.5rem;
}

.header {
  display: flex;
  flex-direction: column;

}

.title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

}

.price {
  font-size: 3.75rem;
  line-height: 1;
  font-weight: 700;

}

.desc  {
    width: 100%;
    height: 2px;
    background: rgb(112, 112, 112);
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    width: 100%;
}

.lists {
  margin-bottom: 1.5rem;
  flex: 1 1 0%;
  color: rgba(156, 163, 175, 1);
}

.lists .list {
  margin-bottom: 0.5rem;
  display: flex;
  margin-left: 0.5rem
}

.lists .list svg {
  height: 1.5rem;
  width: 1.5rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
  color: rgba(167, 139, 250, 1);
}

.action {
  border: none;
  outline: none;
  display: inline-block;
  border-radius: 0.25rem;
  background-color: rgb(0, 0, 0);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgb(255, 255, 255);
  width: 100%;
}
</style>