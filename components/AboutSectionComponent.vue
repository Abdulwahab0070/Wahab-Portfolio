<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
// Refs for animations
const aboutSection = ref(null);
const skills = ref([]);


onMounted(() => {
  // About Section Professional Animation
  gsap.from(aboutSection.value, {
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.6,
    ease: "power2.out"
  });

  onMounted(() => {
    gsap.utils.toArray(skills.value).forEach((skill, index) => {
      gsap.from(skill, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  });
});
</script>
<template>
        <div ref="aboutSection" class="md:w-[90%] mx-auto text-center">
      <h2 class="text-lg font-bold text-gray-400 uppercase tracking-wider">Introduction</h2>
      <h3 class="text-5xl font-bold mt-2 text-center">Overview</h3>
      <p class="text-lg mt-4 text-gray-300 text-center">
        I'm a <span class="font-semibold text-white text-center">Shopify Developer</span> with <span
          class="font-semibold text-white">3 years of experience</span> specializing in
        custom theme development and Shopify store optimization.
      </p>
      <p class="text-lg mt-2 text-gray-300 text-center">
        Skilled in <span class="font-semibold text-white">Liquid, HTML, JavaScript, Nuxt.js & TailwindCSS</span>, I
        build high-performance, scalable eCommerce solutions.
      </p>
      <p class="text-lg mt-2 text-gray-300 text-center">
        My goal is to craft seamless online experiences that enhance brand identity and drive conversions.
      </p>
    </div>

    <!-- Skills Grid -->
    <div class="mt-12 md:w-[90%] mx-auto">
      <h3 class="text-3xl font-bold text-center mb-6">What I Do</h3>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="bg-[#0D1117] rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-800">
          <img class="transition-transform duration-300 hover:rotate-6" src="/download.png" alt="Frontend Developer">
          <p class="mt-4 font-semibold text-white">Frontend Developer</p>
        </div>
        <div
          class="bg-[#0D1117] rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-800">
          <img class="transition-transform duration-300 hover:rotate-6" src="/icons8-shopify-100.png"
            alt="Shopify Developer">
          <p class="mt-4 font-semibold text-white">Shopify Theme Developer</p>
        </div>
        <div
          class="bg-[#0D1117] rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-800">
          <img class="transition-transform duration-300 hover:rotate-6" src="/icons8-nuxt-js-100.png"
            alt="Nuxt.js Developer">
          <p class="mt-4 font-semibold text-white">Nuxt.js Developer</p>
        </div>
        <div
          class="bg-[#0D1117] rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-800">
          <img class="transition-transform duration-300 hover:rotate-6" src="/icons8-js-100.png" alt="JS Developer">
          <p class="mt-4 font-semibold text-white">JS Developer</p>
        </div>
      </div>
    </div>
</template>