<script setup>
import SwiperSlider from "@/components/SwiperSlider.vue";
import ServicesComponent from "~/components/ServicesComponent.vue";
</script>
<template>
  <section id="home" ref="heroSection" class="container bg-no-repeat bg-center w-full md:h-screen pt-20 overflow-hidden">
  <HeroComponent />
  </section>
  <section id="about" class="bg-black text-white py-20 px-6">
    <AboutSectionComponent ref="aboutSection" />
  </section>
  <section id="projects" class="p-4 bg-[#0788ff33]" for="Swiper Slider">
    <SwiperSlider />
  </section>
  <section id="services" class="py-16">
    <ServicesComponent />
  </section>
  <section id="services" class="py-16 bg-[#0788ff33]">
    <ExperienceComponent />
  </section>
  <section id="contact" class="py-16 ">
    <ContactComponent />
  </section>
</template>
