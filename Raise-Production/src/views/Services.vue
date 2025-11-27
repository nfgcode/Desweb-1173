<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const services = [
  {
    icon: 'fa-heart',
    title: 'Fotografi Pernikahan',
    description: 'Mengabadikan hari spesial pernikahan anda dengan dokumentasi foto terbaik',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    features: [
      'Pre-wedding photoshoot',
      'Full day coverage',
      'Professional editing',
      'Digital album'
    ]
  },
  {
    icon: 'fa-building',
    title: 'Acara Korporat',
    description: 'Dokumentasi profesional untuk konferensi, seminar, dan acara perusahaan.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    features: [
      'Event coverage',
      'Corporate portraits',
      'Product photography',
      'Same day delivery'
    ]
  },
  {
    icon: 'fa-house',
    title: 'Fotografi Real Estat',
    description: 'Mendokumentasi properti dengan gambar berkualitas tinggi yang menarik calon pembeli.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070',
    features: [
      'Interior & exterior shots',
      'HDR photography',
      'Virtual tours',
      'Aerial photography'
    ]
  },
  {
    icon: 'fa-video',
    title: 'Video Produksi',
    description: 'Video Produksi untuk iklan, dokumenter, dan konten promosi.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    features: [
      'Commercial videos',
      'Documentaries',
      'Promotional content',
      'Post-production editing'
    ]
  },
  {
    icon: 'fa-user-tie',
    title: 'Sesi Potret',
    description: 'Headshot Foto profesional dan potret keluarga di studio atau lokasi pilihan.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2064',
    features: [
      'Professional headshots',
      'Family portraits',
      'Studio or on-location',
      'Retouching included'
    ]
  },
  {
    icon: 'fa-camera',
    title: 'Sesi Dokumentasi',
    description: 'Dokumentasi foto dan video lengkap untuk event setiap sesi berlangsung.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
    features: [
      'Full event coverage',
      'Photo & video',
      'Live streaming',
      'Quick turnaround'
    ]
  }
];

const navigateToContact = () => {
  router.push('/contact');
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-black/75 via-black/70 to-gray-900/75 text-white py-24 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-4 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Layanan Kami
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
          Dari acara intim hingga perayaan besar, kami menawarkan layanan foto dan video komprehensif yang disesuaikan dengan kebutuhan Anda.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-4 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <!-- Service Image -->
            <div class="relative h-56 overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              <!-- Icon -->
              <div class="absolute top-4 left-4 w-14 h-14 bg-[#f59e0b] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <i :class="['fa-solid', service.icon, 'text-white text-2xl']"></i>
              </div>
            </div>

            <!-- Service Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#f59e0b] transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ service.description }}
              </p>

              <!-- Features List -->
              <ul class="space-y-2 mb-5">
                <li 
                  v-for="(feature, idx) in service.features" 
                  :key="idx"
                  class="flex items-center text-sm text-gray-700"
                >
                  <i class="fa-solid fa-check text-[#f59e0b] text-xs mr-2"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <button
                @click="navigateToContact"
                class="w-full bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-4 py-2.5 rounded-lg font-medium text-sm
                       hover:from-[#fb923c] hover:to-[#f59e0b] active:scale-95
                       transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3"
              >
                <span>Hubungi Kami</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Siap Mengabadikan Momen Anda?
        </h2>
        <p class="text-lg text-white/80 mb-8 leading-relaxed">
          Hubungi kami hari ini untuk konsultasi gratis dan diskusikan bagaimana kami dapat membantu mewujudkan visi Anda.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="navigateToContact"
            class="group inline-flex items-center justify-center gap-2 
                   bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-8 py-4 rounded-lg font-semibold text-lg
                   hover:from-[#fb923c] hover:to-[#f59e0b] active:scale-95
                   transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#f59e0b]/50"
          >
            <i class="fa-solid fa-phone group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"></i>
            <span>Hubungi Kami Sekarang</span>
          </button>
          <button
            @click="router.push('/pricing')"
            class="group inline-flex items-center justify-center gap-2 
                   bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg
                   border-2 border-white/30 hover:bg-white/20 hover:border-white/50 active:scale-95
                   transition-all duration-300 shadow-lg"
          >
            <i class="fa-solid fa-tags group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300"></i>
            <span>Lihat Paket Harga</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
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
  animation: fade-in 0.8s ease-out 0.3s both;
}
</style>
