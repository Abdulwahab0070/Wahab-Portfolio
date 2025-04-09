<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
// Refs for animations
const textSection = ref(null);
const heading = ref(null);
const subText = ref(null);
const contactButton = ref(null);
const profileImage = ref(null);

onMounted(() => {
  // Timeline animation
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(textSection.value, { opacity: 1, y: 0, duration: 1 })
    .from(heading.value, { opacity: 0, y: -20, duration: 0.8 }, "-=0.5")
    .from(subText.value, { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
    .to(contactButton.value, { opacity: 1, scale: 1, duration: 0.5 }, "-=0.3")
    .to(profileImage.value, { opacity: 1, scale: 1, duration: 1 }, "-=1");

});


function heroscrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
<template>
        <div class="mx-auto flex flex-col md:flex-row items-center justify-between py-20 h-full relative z-10">
      <!-- Left Side (Text) -->
      <div ref="textSection" class="text-center md:text-left md:w-1/2 opacity-0 translate-y-10">
        <h2 ref="heading" class="text-5xl font-bold text-white">
          Hi, I'm Abdul Wahab
        </h2>
        <p ref="subText" class="text-lg text-white mt-4">
          Shopify developer | Nuxt.js developer
        </p>
        <!-- Get in Touch Button -->
        <button @click="heroscrollToContact" ref="contactButton"
          class="px-7 mt-8 py-3.5 gap-1 transition-all duration-300 bg-blue-600 text-white rounded-full border-2 border-transparent hover:bg-[#040c16] hover:border-white transform scale-90 opacity-0">
          Get in Touch
        </button>
      </div>

      <!-- Right Side (Image) -->
      <div ref="profileImage" class="mt-10 md:mt-0 md:w-1/2 flex justify-center opacity-0 scale-90">
        <img src="@/assets/img/Image.jpg" densities="1x" formate="jpg" alt="Profile Image"
          class="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover" />
      </div>
    </div>
</template>