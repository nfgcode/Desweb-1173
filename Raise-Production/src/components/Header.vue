<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import logoImage from "../assets/logo.png"; 

const router = useRouter();
const menuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  // Prevent body scroll when menu is open on mobile
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const navigateToTop = (path) => {
  router.push(path);
  menuOpen.value = false;
  document.body.style.overflow = '';
  // scroll ke atas setelah navigasi
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<template>
  <header 
    class="sticky top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black shadow-md'"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300"
         :class="isScrolled ? 'py-3' : 'py-4'">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <button 
          @click="navigateToTop('/')" 
          class="flex items-center gap-3 cursor-pointer"
        >
          <img 
            :src="logoImage" 
            alt="Raise Production Logo" 
            class="transition-all duration-300"
            :class="isScrolled ? 'h-8 w-8' : 'h-10 w-10'"
          />
          <span 
            class="font-bold text-white transition-all duration-300"
            :class="isScrolled ? 'text-xl' : 'text-2xl'"
          >
            Raise Production
          </span>
        </button>

        <!-- Mobile & Tablet Menu Button with Animation -->
        <button 
          @click="toggleMenu" 
          class="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-all duration-300 text-white relative group"
        >
          <div class="w-6 h-5 flex flex-col justify-between">
            <span 
              class="w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
              :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span 
              class="w-full h-0.5 bg-white rounded-full transition-all duration-300"
              :class="menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
            ></span>
            <span 
              class="w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center"
              :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>

        <!-- Desktop Menu with Hover Effects -->
        <div class="hidden lg:flex gap-2">
          <button 
            @click="navigateToTop('/')" 
            class="relative px-4 py-2 font-medium text-base text-white transition-all duration-300 rounded-lg group overflow-hidden"
            :class="$route.path === '/' ? 'text-[#f59e0b]' : 'hover:text-[#f59e0b]'"
          >
            <span class="relative z-10 flex items-center gap-2">
              <i class="fa-solid fa-home text-sm"></i>
              Home
            </span>
            <div 
              class="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/10 to-[#f59e0b]/5 transform origin-center transition-all duration-300 rounded-lg"
              :class="$route.path === '/' ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'"
            ></div>
          </button>
          <button 
            @click="navigateToTop('/pricing')" 
            class="relative px-4 py-2 font-medium text-base text-white transition-all duration-300 rounded-lg group overflow-hidden"
            :class="$route.path === '/pricing' ? 'text-[#f59e0b]' : 'hover:text-[#f59e0b]'"
          >
            <span class="relative z-10 flex items-center gap-2">
              <i class="fa-solid fa-tags text-sm"></i>
              Pricing
            </span>
            <div 
              class="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/10 to-[#f59e0b]/5 transform origin-center transition-all duration-300 rounded-lg"
              :class="$route.path === '/pricing' ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'"
            ></div>
          </button>
          <button 
            @click="navigateToTop('/contact')" 
            class="relative px-4 py-2 font-medium text-base text-white transition-all duration-300 rounded-lg group overflow-hidden"
            :class="$route.path === '/contact' ? 'text-[#f59e0b]' : 'hover:text-[#f59e0b]'"
          >
            <span class="relative z-10 flex items-center gap-2">
              <i class="fa-solid fa-envelope text-sm"></i>
              Contact
            </span>
            <div 
              class="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/10 to-[#f59e0b]/5 transform origin-center transition-all duration-300 rounded-lg"
              :class="$route.path === '/contact' ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'"
            ></div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu with Slide Animation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="menuOpen" class="lg:hidden mt-4 space-y-2 pb-4">
          <button 
            @click="navigateToTop('/')"
            class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-white hover:text-[#f59e0b] hover:bg-gray-800 group"
            :class="{ 'text-[#f59e0b] bg-gray-800': $route.path === '/' }"
          >
            <i class="fa-solid fa-home text-sm group-hover:scale-110 transition-transform duration-300"></i>
            <span>Home</span>
            <i class="fa-solid fa-chevron-right ml-auto text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
          </button>
          <button 
            @click="navigateToTop('/pricing')"
            class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-white hover:text-[#f59e0b] hover:bg-gray-800 group"
            :class="{ 'text-[#f59e0b] bg-gray-800': $route.path === '/pricing' }"
          >
            <i class="fa-solid fa-tags text-sm group-hover:scale-110 transition-transform duration-300"></i>
            <span>Pricing</span>
            <i class="fa-solid fa-chevron-right ml-auto text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
          </button>
          <button 
            @click="navigateToTop('/contact')"
            class="w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-white hover:text-[#f59e0b] hover:bg-gray-800 group"
            :class="{ 'text-[#f59e0b] bg-gray-800': $route.path === '/contact' }"
          >
            <i class="fa-solid fa-envelope text-sm group-hover:scale-110 transition-transform duration-300"></i>
            <span>Contact</span>
            <i class="fa-solid fa-chevron-right ml-auto text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
          </button>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<style scoped></style>