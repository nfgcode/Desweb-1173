<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import heroBg from '../assets/hero-bg.png'; 
import tentangKamiImage from "../assets/tentang-kami.png";

const router = useRouter();
const isVisible = ref({});

const navigateToPage = (path) => {
  router.push(path);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};

// Portfolio data - using public folder to avoid special character issues
const portfolio = {
  wedding1_1: '/portfolio/wedding-risma-agus-1.webp',
  wedding1_2: '/portfolio/wedding-risma-agus-2.webp',
  wedding1_3: '/portfolio/wedding-risma-agus-3.webp',
  wedding1_4: '/portfolio/wedding-risma-agus-4.webp',
  
  prewedding1_1: '/portfolio/prewedding-aldy-dwi-1.jpg',
  prewedding1_2: '/portfolio/prewedding-aldy-dwi-2.jpg',
  prewedding1_3: '/portfolio/prewedding-aldy-dwi-3.jpg',
  prewedding1_4: '/portfolio/prewedding-aldy-dwi-4.jpg',
  
  engagement1_1: '/portfolio/engagement-cipta-tiara-1.webp',
  engagement1_2: '/portfolio/engagement-cipta-tiara-2.webp',
  engagement1_3: '/portfolio/engagement-cipta-tiara-3.webp',
  engagement1_4: '/portfolio/engagement-cipta-tiara-4.webp',
};

// Slider state
const currentSlide = ref(0);
const totalSlides = 3;

const nextSlide = () => {
  if (currentSlide.value < totalSlides - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

// Data-driven stats
const stats = [
  {
    icon: 'fa-briefcase',
    color: 'text-[#f59e0b]',
    value: '25+',
    label: 'Project Foto Event'
  },
  {
    icon: 'fa-users',
    color: 'text-[#10b981]',
    value: '5000+',
    label: 'Foto Sesi'
  },
  {
    icon: 'fa-calendar',
    iconType: 'fa-regular',
    color: 'text-[#8b5cf6]',
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

// Intersection Observer for scroll animations
const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const key = entry.target.dataset.animate;
        if (entry.isIntersecting) {
          isVisible.value[key] = true;
        } else {
          // Reset animation when element exits viewport
          isVisible.value[key] = false;
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );

  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el) => observer.observe(el));

  return observer;
};

let observer = null;

onMounted(() => {
  observer = observeElements();
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section 
      class="relative text-white py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-4 overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-gray-900/75 animate-gradient-fade"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="max-w-3xl space-y-8">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in-up">
            Raise Production<br>
            <span class="bg-gradient-to-r from-[#f59e0b] via-[#fb923c] to-[#f59e0b] bg-clip-text text-transparent animate-gradient-x inline-block">
              Photography Terbaik di Balikpapan
            </span>
          </h1>
          <p class="text-lg md:text-xl text-white/90 leading-relaxed animate-slide-in-up" style="animation-delay: 0.2s">
            Make your moments rise with us.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style="animation-delay: 0.4s">
            <button 
              @click="navigateToPage('/contact')"
              class="group inline-flex items-center justify-center gap-2 
                     bg-white text-black px-8 py-3.5 rounded-lg font-medium 
                     border-2 border-white hover:bg-transparent hover:text-white hover:border-white
                     transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/20
                     w-full sm:w-auto active:scale-95 hover:scale-105 relative overflow-hidden"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <i class="fa-solid fa-phone group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10"></i>
              <span class="relative z-10">Booking Sekarang!</span>
            </button>
            <button 
              @click="navigateToPage('/pricing')"
              class="group inline-flex items-center justify-center gap-2 
                     bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-8 py-3.5 rounded-lg font-medium 
                     border-2 border-transparent hover:border-[#f59e0b] hover:from-[#fb923c] hover:to-[#f59e0b]
                     transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#f59e0b]/50
                     w-full sm:w-auto active:scale-95 hover:scale-105 relative overflow-hidden"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <i class="fa-solid fa-tags group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 relative z-10"></i>
              <span class="relative z-10">Lihat Paket Harga</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="max-w-7xl mx-auto mt-16 sm:mt-20 relative z-10" data-animate="stats">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center 
                   border border-white/20 hover:bg-white/20 hover:border-white/40
                   transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f59e0b]/20
                   opacity-0 translate-y-10"
            :class="isVisible.stats ? 'animate-slide-in-up' : ''"
            :style="`animation-delay: ${index * 0.15}s`"
          >
            <div class="mb-4 relative">
              <div class="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <i 
                :class="[
                  stat.iconType || 'fa-solid',
                  stat.icon,
                  stat.color,
                  'text-4xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 relative z-10'
                ]"
              ></i>
            </div>
            <div class="text-3xl font-bold mb-2 group-hover:text-[#f59e0b] transition-colors duration-300">{{ stat.value }}</div>
            <div class="text-white text-base group-hover:text-white/90 transition-colors duration-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tentang Kami Section -->
    <section class="py-16 sm:py-20 px-6 sm:px-8 lg:px-4 bg-gradient-to-b from-white to-gray-50" data-animate="about">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="order-2 lg:order-1 opacity-0" :class="isVisible.about ? 'animate-slide-in-left' : ''">
            <div class="relative group overflow-hidden rounded-2xl">
              <div class="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
              <img 
                :src="tentangKamiImage" 
                alt="Raise Production Tentang Kami" 
                class="w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-[#f59e0b]/30
                       transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>

          <!-- Text Content -->
          <div class="order-1 lg:order-2 space-y-6 opacity-0" :class="isVisible.about ? 'animate-slide-in-right' : ''">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 hover:text-[#f59e0b] transition-colors duration-300">
                Tentang Kami
              </h2>
              <div class="w-20 h-1 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] rounded-full animate-width-expand"></div>
            </div>
            
            <div class="space-y-4 text-gray-700">
              <p 
                v-for="(paragraph, index) in storyParagraphs" 
                :key="index"
                class="leading-relaxed text-base transition-all duration-500 hover:text-gray-900 hover:translate-x-2 hover:scale-[1.02] cursor-default"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portofolio Section -->
    <section class="py-16 sm:py-20 px-6 sm:px-8 lg:px-4 bg-white" data-animate="portfolio">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 opacity-0" :class="isVisible.portfolio ? 'animate-slide-in-down' : ''">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4 hover:text-[#f59e0b] transition-colors duration-300">
            Portofolio Kami
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-[#f59e0b] to-[#d97706] rounded-full mx-auto mb-4 animate-width-expand"></div>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Lihat koleksi momen-momen indah yang telah kami abadikan untuk klien kami
          </p>
        </div>

        <!-- Portfolio Gallery with Slider -->
        <div class="relative opacity-0" :class="isVisible.portfolio ? 'animate-scale-in' : ''" style="animation-delay: 0.3s">
          <div class="overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#f59e0b]/20 transition-shadow duration-500">
            <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <!-- Wedding Risma & Agus -->
              <div class="min-w-full">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.wedding1_1" 
                      alt="Wedding Risma & Agus 1" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <p class="text-white font-semibold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Wedding Risma & Agus</p>
                    </div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.wedding1_2" 
                      alt="Wedding Risma & Agus 2" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.wedding1_3" 
                      alt="Wedding Risma & Agus 3" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.wedding1_4" 
                      alt="Wedding Risma & Agus 4" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div class="text-center mt-6 transform hover:scale-105 transition-transform duration-300">
                  <h3 class="text-xl font-bold text-gray-800 hover:text-[#f59e0b] transition-colors duration-300">Wedding Risma & Agus</h3>
                  <p class="text-gray-600 text-sm mt-1">08.06.25 • @yulianti_rismaa</p>
                </div>
              </div>

              <!-- Pre Wedding Aldy & Dwi -->
              <div class="min-w-full">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.prewedding1_1" 
                      alt="Pre Wedding Aldy & Dwi 1" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <p class="text-white font-semibold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Pre Wedding Aldy & Dwi</p>
                    </div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.prewedding1_2" 
                      alt="Pre Wedding Aldy & Dwi 2" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.prewedding1_3" 
                      alt="Pre Wedding Aldy & Dwi 3" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.prewedding1_4" 
                      alt="Pre Wedding Aldy & Dwi 4" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div class="text-center mt-6 transform hover:scale-105 transition-transform duration-300">
                  <h3 class="text-xl font-bold text-gray-800 hover:text-[#f59e0b] transition-colors duration-300">Pre Wedding Aldy & Dwi</h3>
                  <p class="text-gray-600 text-sm mt-1">Pre Wedding Session • Balikpapan</p>
                </div>
              </div>

              <!-- Engagement Cipta & Tiara -->
              <div class="min-w-full">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.engagement1_1" 
                      alt="Engagement Cipta & Tiara 1" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <p class="text-white font-semibold text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Engagement Cipta & Tiara</p>
                    </div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.engagement1_2" 
                      alt="Engagement Cipta & Tiara 2" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.engagement1_3" 
                      alt="Engagement Cipta & Tiara 3" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div class="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
                    <img 
                      :src="portfolio.engagement1_4" 
                      alt="Engagement Cipta & Tiara 4" 
                      class="w-full h-full object-cover transform group-hover:scale-125 group-hover:-rotate-2 transition-all duration-700"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div class="text-center mt-6 transform hover:scale-105 transition-transform duration-300">
                  <h3 class="text-xl font-bold text-gray-800 hover:text-[#f59e0b] transition-colors duration-300">Engagement Cipta & Tiara</h3>
                  <p class="text-gray-600 text-sm mt-1">04.04.2025 • Balikpapan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button 
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] hover:from-[#fb923c] hover:to-[#f59e0b] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f59e0b]/50 transition-all duration-500 z-10 group hover:scale-110 active:scale-95"
            :disabled="currentSlide === 0"
            :class="{ 'opacity-50 cursor-not-allowed hover:scale-100': currentSlide === 0 }"
          >
            <i class="fa-solid fa-chevron-left text-xl group-hover:-translate-x-1 transition-transform duration-300"></i>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] hover:from-[#fb923c] hover:to-[#f59e0b] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#f59e0b]/50 transition-all duration-500 z-10 group hover:scale-110 active:scale-95"
            :disabled="currentSlide === totalSlides - 1"
            :class="{ 'opacity-50 cursor-not-allowed hover:scale-100': currentSlide === totalSlides - 1 }"
          >
            <i class="fa-solid fa-chevron-right text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
          </button>

          <!-- Dots Indicator -->
          <div class="flex justify-center gap-3 mt-8">
            <button 
              v-for="i in totalSlides" 
              :key="i"
              @click="currentSlide = i - 1"
              class="rounded-full transition-all duration-500 hover:scale-125 active:scale-95 group relative"
              :class="currentSlide === i - 1 ? 'bg-[#f59e0b] w-10 h-3 shadow-lg shadow-[#f59e0b]/50' : 'bg-gray-400 hover:bg-gray-500 w-3 h-3'"
            >
              <span v-if="currentSlide === i - 1" class="absolute inset-0 bg-[#f59e0b] rounded-full animate-ping opacity-75"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-down {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 100%;
    background-position: left center;
  }
  50% {
    background-size: 200% 100%;
    background-position: right center;
  }
}

@keyframes gradient-fade {
  0%, 100% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.9;
  }
}

@keyframes width-expand {
  from {
    width: 0;
  }
  to {
    width: 5rem;
  }
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-slide-in-down {
  animation: slide-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-slide-in-left {
  animation: slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-slide-in-right {
  animation: slide-in-right 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-scale-in {
  animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-gradient-fade {
  animation: gradient-fade 3s ease-in-out infinite;
}

.animate-width-expand {
  animation: width-expand 0.8s ease-out both;
}
</style>