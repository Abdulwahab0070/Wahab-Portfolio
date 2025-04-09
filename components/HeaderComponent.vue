<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const activeSection = ref("home");
const isMenuOpen = ref(false); // Mobile menu state

// Scroll event handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // Auto-detect active section
  const sections = ["home", "about", "projects", "services", "contact"];
  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = id;
      }
    }
  });
};

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    activeSection.value = sectionId;
    isMenuOpen.value = false; // Close menu after click
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Navbar -->
  <header :class="['fixed top-0 left-0 w-full z-50 transition-all duration-300', isScrolled ? 'bg-[#040c16] shadow-md' : 'bg-transparent']">
    <div class="flex justify-between items-center py-6 px-6">
      <div class="Profile_name">
        <h1 class="text-4xl font-bold text-white">Wahab</h1>
      </div>

      <!-- Hamburger Button (Mobile) -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-white text-3xl">
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>✖</span>
      </button>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex">
        <ul class="menu-wrapper flex items-center space-x-6 gap-x-1">
          <li v-for="id in ['home', 'about', 'projects', 'services', 'contact']" :key="id">
            <a
              href="#"
              @click.prevent="scrollToSection(id)"
              class="relative text-white after:block after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300"
              :class="activeSection === id ? 'after:w-full' : 'hover:after:w-full'"
            >
              {{ id.charAt(0).toUpperCase() + id.slice(1) }}
            </a>
          </li>
          <li>
            <button
              @click.prevent="scrollToSection('contact')"
              class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Let's Talk
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile Drawer Menu -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-70 flex justify-end z-50"
    >
      <div class="w-64 bg-[#040c16] h-full shadow-lg transform transition-transform duration-300">
        <button @click="isMenuOpen = false" class="absolute top-4 right-4 text-white text-2xl">✖</button>
        
        <ul class="mt-20 space-y-6 px-6 text-white">
          <li v-for="id in ['home', 'about', 'projects', 'services', 'contact']" :key="id">
            <a
              href="#"
              @click.prevent="scrollToSection(id)"
              class="block py-2 px-4 hover:bg-blue-500 rounded-lg"
            >
              {{ id.charAt(0).toUpperCase() + id.slice(1) }}
            </a>
          </li>
          <li>
            <button
              @click.prevent="scrollToSection('contact')"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
            >
              Let's Talk
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
