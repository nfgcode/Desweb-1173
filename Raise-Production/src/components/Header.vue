<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logoImage from "../assets/logo.png"; 

const router = useRouter();
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const navigateToTop = (path) => {
  router.push(path);
  menuOpen.value = false;
  // scroll ke atas setelah navigasi
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <button 
          @click="navigateToTop('/')" 
          class="flex items-center gap-3 cursor-pointer"
        >
          <img :src="logoImage" alt="Raise Production Logo" class="h-10 w-10" />
          <span class="text-2xl font-bold text-navy">Raise Production</span>
        </button>

        <!-- Mobile & Tablet Menu Button -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden p-2 rounded hover:bg-gray-100 transition text-gray-text"
        >
          <span v-if="!menuOpen" class="text-2xl">☰</span>
          <span v-else class="text-2xl">✕</span>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex gap-8">
          <button 
            @click="navigateToTop('/')" 
            class="font-medium text-base text-gray-text hover:text-[#155DFC] transition"
            :class="{ 'text-[#155DFC]': $route.path === '/' }"
          >
            Home
          </button>
          <button 
            @click="navigateToTop('/contact')" 
            class="font-medium text-base text-gray-text hover:text-[#155DFC] transition"
            :class="{ 'text-[#155DFC]': $route.path === '/contact' }"
          >
            Contact
          </button>
        </div>
      </div>

      <!-- Mobile & Tablet Menu -->
      <div v-if="menuOpen" class="lg:hidden mt-4 space-y-2">
        <button 
          @click="navigateToTop('/')"
          class="w-full text-left block px-4 py-2 rounded transition font-medium text-gray-text hover:text-[#155DFC] hover:bg-gray-100"
          :class="{ 'text-[#155DFC] bg-gray-100': $route.path === '/' }"
        >
          Home
        </button>
        <button 
          @click="navigateToTop('/contact')"
          class="w-full text-left block px-4 py-2 rounded transition font-medium text-gray-text hover:text-[#155DFC] hover:bg-gray-100"
          :class="{ 'text-[#155DFC] bg-gray-100': $route.path === '/contact' }"
        >
          Contact
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>