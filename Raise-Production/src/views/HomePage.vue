<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import heroBg from '../assets/hero-bg.png'; 
import tentangKamiImage from "../assets/tentang-kami.png";

const router = useRouter();

const navigateToPage = (path) => {
  router.push(path);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};

// Data-driven stats
const stats = [
  {
    icon: 'fa-briefcase',
    color: 'text-[#FFDF20]',
    value: '25+',
    label: 'Project Foto Event'
  },
  {
    icon: 'fa-users',
    color: 'text-[#7BF1A8]',
    value: '5000+',
    label: 'Foto Sesi'
  },
  {
    icon: 'fa-calendar',
    iconType: 'fa-regular',
    color: 'text-[#DAB2FF]',
    value: '24/7',
    label: 'Layanan Pelanggan'
  }
];

// Story paragraphs - data-driven
const storyParagraphs = [
  'Di Raise Production, kami tidak hanya memotret. Kami "mengangkat" setiap momen Anda. Misi kami adalah mengubah kenangan berharga menjadi cerita visual yang berkualitas tinggi, abadi, dan tak terlupakan. Make your moments rise with us.',
  'Sejak didirikan, Raise Production telah berkomitmen untuk memberikan layanan fotografi terbaik di Balikpapan. Tim profesional kami menggunakan teknologi terkini dan teknik fotografi inovatif untuk menangkap esensi setiap momen, dari acara pribadi hingga proyek komersial.',
  'Kami percaya bahwa setiap foto memiliki kekuatan untuk menceritakan sebuah kisah. Oleh karena itu, kami bekerja sama dengan klien kami untuk memahami visi mereka dan mewujudkannya melalui lensa kami. Dengan perhatian terhadap detail dan dedikasi terhadap kualitas, Raise Production siap membantu Anda mengabadikan momen-momen penting dalam hidup Anda.'
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section 
      class="relative text-white py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-4 overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-linear-to-r from-[#1c398e]/90 to-[#1447e6]/80"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="max-w-3xl space-y-8">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Raise Production<br>Photography Terbaik di Balikpapan
          </h1>
          <p class="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in-delay">
            Make your moments rise with us.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button 
              @click="navigateToPage('/contact')"
              class="group inline-flex items-center justify-center gap-2 
                     bg-white text-[#1c398e] px-8 py-3.5 rounded-lg font-medium 
                     border-2 border-white hover:bg-transparent hover:text-white 
                     transition-all duration-300 shadow-lg hover:shadow-xl 
                     w-full sm:w-auto active:scale-95"
            >
              <i class="fa-solid fa-phone group-hover:scale-110 transition-transform duration-300"></i>
              Hubungi Kami
            </button>
            <button 
              @click="navigateToPage('/')"
              class="group inline-flex items-center justify-center gap-2 
                     bg-transparent text-white px-8 py-3.5 rounded-lg font-medium 
                     border-2 border-white hover:bg-white hover:text-[#1c398e] 
                     transition-all duration-300 w-full sm:w-auto active:scale-95"
            >
              <i class="fa-solid fa-circle-info group-hover:scale-110 transition-transform duration-300"></i>
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="max-w-7xl mx-auto mt-16 sm:mt-20 relative z-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center 
                   border border-white/20 hover:bg-white/15 hover:border-white/30
                   transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="mb-4">
              <i 
                :class="[
                  stat.iconType || 'fa-solid',
                  stat.icon,
                  stat.color,
                  'text-4xl group-hover:scale-110 transition-transform duration-300'
                ]"
              ></i>
            </div>
            <div class="text-3xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-white text-base">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tentang Kami Section -->
    <section class="py-16 sm:py-20 px-6 sm:px-8 lg:px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="order-2 lg:order-1">
            <div class="relative group overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-linear-to-r from-[#1c398e] to-[#1447e6] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
              <img 
                :src="tentangKamiImage" 
                alt="Raise Production Tentang Kami" 
                class="w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl 
                       transition-all duration-300 transform group-hover:scale-105"
              />
            </div>
          </div>

          <!-- Text Content -->
          <div class="order-1 lg:order-2 space-y-6">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-[#1c398e] mb-4">
                Tentang Kami
              </h2>
              <div class="w-20 h-1 bg-linear-to-r from-[#1c398e] to-[#1447e6] rounded-full"></div>
            </div>
            
            <div class="space-y-4 text-gray-700">
              <p 
                v-for="(paragraph, index) in storyParagraphs" 
                :key="index"
                class="leading-relaxed text-base"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 0.8s ease-out 0.4s both;
}
</style>