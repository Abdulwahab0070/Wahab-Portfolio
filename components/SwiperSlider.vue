<template>
    <div class="my-8 md:px-16">
       <!-- "My Work" Animation -->
       <h6 ref="myWorkRef"
           class="uppercase text-lg font-medium opacity-0 transition-all duration-700 ease-in-out"
           :class="{ 'opacity-100': myWorkVisible }"
       >
         <span
           class="text-white inline-block tracking-[4px] leading-[20px] bg-[#0788FF33] rounded-[4px] px-3 py-1.5 transition-all duration-300 hover:scale-105"
         >
           My Work
         </span>
       </h6>
   
       <!-- "Recent Projects" Animation (Delayed) -->
       <h2 ref="recentProjectsRef"
           class="uppercase text-3xl md:text-4xl font-bold text-white mt-2 opacity-0 transition-all duration-700 ease-in-out delay-300"
           :class="{ 'opacity-100': recentProjectsVisible }"
       >
         Recent Projects
       </h2>
     </div>
       <div>
         <Swiper
           :modules="[Autoplay]"
           :slides-per-view="4"
           :space-between="20"
           :loop="true"
           :speed="3000" 
           :autoplay="{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }"
           :breakpoints="{
           320: { slidesPerView: 2, spaceBetween: 10 }, 
           1024: { slidesPerView: 4, spaceBetween: 20 }
            }"
           class="md:w-[90%]"
         >
           <SwiperSlide v-for="(slide, index) in slides" :key="index" class="relative text-center">
             <!-- Optimized Image with Aspect Ratio -->
             <a :href="slide.url" target="_blank" class="hover:underline text-blue-600">
             <nuxt-img 
               :src="slide.image" 
               format="webp" 
               quality="80" 
               class="w-full bg-white aspect-[9/13] object-cover rounded-lg shadow-md" 
             />
             
             <!-- Badge (Top Left Corner) -->
             <span class="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
               {{ slide.platform }}
             </span>
       
             <!-- Heading with Clickable URL -->
             <h3 class="mt-3 text-lg font-semibold text-white">
                 {{ slide.brand }}
               </h3>
           </a>
           </SwiperSlide>
         </Swiper>
       </div>
     </template>
     
     <script setup>
     import { ref, onMounted } from "vue";
     import { Swiper, SwiperSlide } from "swiper/vue";
     import "swiper/css";
     import "swiper/css/navigation";
     import "swiper/css/pagination";
     import { Autoplay } from "swiper/modules";
     
     const slides = ref([
       { image: "/By-Edit.webp", platform: "Shopify", brand: "By Edit", url: "https://www.byedit.com/" },
       { image: "/Nestle.png", platform: "Shopify", brand: "Nestle", url: "https://eshop.nestle.pk/" },
       { image: "/Vyntage.png", platform: "Shopify", brand: "Vyntage Horology", url: "https://vyntage.com/" },
       { image: "/Mehroze.webp", platform: "Shopify", brand: "Mehroze Saboor", url: "https://mehrozeworld.com/" },
       { image: "/Aesop.webp", platform: "Shopify", brand: "Aesop ae", url: "https://www.aesop.ae/" },
       { image: "/caratcraft.webp", platform: "Shopify", brand: "Caratcraft", url: "https://caratcraft.ae/" },
       { image: "/Amarah-Khan.png", platform: "Shopify", brand: "Amarah Khan", url: "https://www.ammarakhan.com/" },
       { image: "/Klekktic.png", platform: "Shopify", brand: "Klekktic", url: "https://klekktic.com/" },
       { image: "/My-Vitamin.png", platform: "Shopify", brand: "My Vitamin", url: "https://www.myvitaminstore.pk/" },
     ]);
   
   // Reference elements
   const myWorkRef = ref(null);
   const recentProjectsRef = ref(null);
   
   // Custom composable to track visibility
   const { isVisible: myWorkVisible } = useIntersectionObserver(myWorkRef);
   const { isVisible: recentProjectsVisible } = useIntersectionObserver(recentProjectsRef);
     </script>
     