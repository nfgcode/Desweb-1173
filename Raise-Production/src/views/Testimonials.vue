<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref({});

const testimonials = [
  {
    name: 'Sarah & Michael',
    role: 'Klien Pernikahan',
    rating: 5,
    text: 'Luar biasa fenomenal! Mereka menangkap setiap momen hari pernikahan kami dengan sempurna. Foto-fotonya memukau dan kami sangat puas dengan hasilnya.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    delay: '0s'
  },
  {
    name: 'David Chen',
    role: 'Klien Korporat',
    rating: 5,
    text: 'Profesional, tepat waktu, dan menghasilkan konten luar biasa untuk konferensi tahunan kami. Video highlightnya melampaui ekspektasi kami.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    delay: '0.1s'
  },
  {
    name: 'Jennifer Kusuma',
    role: 'Agen Real Estat',
    rating: 5,
    text: 'Foto-foto real estat yang mereka ambil secara dramatis meningkatkan minat terhadap listing saya. Perhatian mereka terhadap detail sangat luar biasa.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    delay: '0.2s'
  },
  {
    name: 'Robert Wijaya',
    role: 'Klien Potret Keluarga',
    rating: 5,
    text: 'Membuat keluarga kami merasa sangat nyaman selama sesi pemotretan. Portofolio indah dan akan kami hargai untuk generasi mendatang.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
    delay: '0.3s'
  },
  {
    name: 'Linda Kartika',
    role: 'Klien Pre-Wedding',
    rating: 5,
    text: 'Hasil foto pre-wedding kami sangat artistic dan romantis. Tim sangat kreatif dalam menentukan lokasi dan pose. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
    delay: '0.4s'
  },
  {
    name: 'Ahmad Fauzi',
    role: 'Klien Video Produksi',
    rating: 5,
    text: 'Video promosi yang dibuat sangat profesional dengan kualitas sinematik yang luar biasa. Proses editing cepat dan hasil melampaui harapan.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    delay: '0.5s'
  }
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
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-black/75 via-black/70 to-gray-900/75 text-white py-20 sm:py-24 px-6 sm:px-8 lg:px-4 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-up">
          Testimoni Kami
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style="animation-delay: 0.2s">
          Berikut kepuasan dari klien kami yang telah menggunakan jasa berdasarkan pengalaman mereka.
        </p>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="py-16 sm:py-20 px-6 sm:px-8 lg:px-4 bg-gradient-to-b from-white to-gray-50" data-animate="testimonials">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0"
            :class="isVisible.testimonials ? 'animate-scale-in' : ''"
            :style="`animation-delay: ${testimonial.delay}`"
          >
            <!-- Stars Rating -->
            <div class="flex gap-1 mb-4">
              <i 
                v-for="star in testimonial.rating" 
                :key="star"
                class="fa-solid fa-star text-[#f59e0b] text-lg group-hover:scale-110 transition-transform duration-300"
                :style="`transition-delay: ${star * 50}ms`"
              ></i>
            </div>

            <!-- Testimonial Text -->
            <p class="text-gray-700 text-base leading-relaxed mb-6 italic">
              "{{ testimonial.text }}"
            </p>

            <!-- Client Info -->
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#f59e0b]/20 group-hover:ring-[#f59e0b] transition-all duration-300">
                <img 
                  :src="testimonial.image" 
                  :alt="testimonial.name"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h4 class="font-bold text-gray-800 group-hover:text-[#f59e0b] transition-colors duration-300">
                  {{ testimonial.name }}
                </h4>
                <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 sm:py-20 px-6 sm:px-8 lg:px-4 bg-gradient-to-br from-black via-gray-900 to-black" data-animate="stats">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="opacity-0" :class="isVisible.stats ? 'animate-slide-in-up' : ''" style="animation-delay: 0s">
            <div class="text-5xl font-bold text-[#f59e0b] mb-2 group-hover:scale-110 transition-transform duration-300">
              1000+
            </div>
            <p class="text-white text-lg">Klien Puas</p>
          </div>
          <div class="opacity-0" :class="isVisible.stats ? 'animate-slide-in-up' : ''" style="animation-delay: 0.1s">
            <div class="text-5xl font-bold text-[#f59e0b] mb-2 group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <p class="text-white text-lg">Acara Terdokumentasi</p>
          </div>
          <div class="opacity-0" :class="isVisible.stats ? 'animate-slide-in-up' : ''" style="animation-delay: 0.2s">
            <div class="text-5xl font-bold text-[#f59e0b] mb-2 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <p class="text-white text-lg">Tingkat Kepuasan</p>
          </div>
          <div class="opacity-0" :class="isVisible.stats ? 'animate-slide-in-up' : ''" style="animation-delay: 0.3s">
            <div class="text-5xl font-bold text-[#f59e0b] mb-2 group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <p class="text-white text-lg">Tahun Pengalaman</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 px-6 sm:px-8 lg:px-4 bg-white" data-animate="cta">
      <div class="max-w-4xl mx-auto text-center opacity-0" :class="isVisible.cta ? 'animate-scale-in' : ''">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Jadilah Bagian dari Testimoni Kami
        </h2>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Bergabunglah dengan ratusan klien yang puas dan biarkan kami mengabadikan momen berharga Anda
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contact"
            class="group inline-flex items-center justify-center gap-2 
                   bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-8 py-4 rounded-lg font-semibold text-lg
                   hover:from-[#fb923c] hover:to-[#f59e0b] active:scale-95
                   transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#f59e0b]/50"
          >
            <i class="fa-solid fa-phone group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"></i>
            <span>Hubungi Kami</span>
          </router-link>
          <router-link
            to="/pricing"
            class="group inline-flex items-center justify-center gap-2 
                   bg-white text-[#f59e0b] px-8 py-4 rounded-lg font-semibold text-lg
                   border-2 border-[#f59e0b] hover:bg-[#f59e0b] hover:text-white active:scale-95
                   transition-all duration-300 shadow-lg"
          >
            <i class="fa-solid fa-tags group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300"></i>
            <span>Lihat Paket</span>
          </router-link>
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

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

.animate-slide-in-up {
  animation: slide-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-scale-in {
  animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
</style>
