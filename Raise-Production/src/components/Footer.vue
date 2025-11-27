<script setup>
import { useRouter } from 'vue-router';
import logoImage from "../assets/logo.png";

const router = useRouter();

const navigateToTop = (path) => {
  router.push(path);
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};
</script>

<template>
  <footer class="bg-[#101828] text-[#D1D5DC] py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img :src="logoImage" alt="RaiseProduction Logo" class="h-8 w-8" />
            <h3 class="text-xl font-bold text-white">Raise Production</h3>
          </div>
          <p class="text-sm leading-relaxed">
            Make your moments rise with us.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4">Menu</h3>
          <ul class="space-y-2">
            <li>
              <button 
                @click="navigateToTop('/')" 
                class="text-sm hover:text-[#f59e0b] transition text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                @click="navigateToTop('/services')" 
                class="text-sm hover:text-[#f59e0b] transition text-left"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                @click="navigateToTop('/pricing')" 
                class="text-sm hover:text-[#f59e0b] transition text-left"
              >
                Pricing
              </button>
            </li>
            <li>
              <button 
                @click="navigateToTop('/testimonials')" 
                class="text-sm hover:text-[#f59e0b] transition text-left"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                @click="navigateToTop('/contact')" 
                class="text-sm hover:text-[#f59e0b] transition text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Kontak</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-sm">
              <i class="fa-solid fa-location-dot mt-0.5"></i>
              <span>QR87+WXJ, Jl. Letjen Suprapto, Baru Ilir, Kec. Balikpapan Bar., Kota Balikpapan, Kalimantan Timur</span>
            </li>
            <li class="flex items-center gap-2 text-sm">
              <i class="fa-solid fa-phone"></i>
              <span>62 822-1351-5177</span>
            </li>
            <li class="flex items-center gap-2 text-sm">
              <i class="fa-solid fa-envelope"></i>
              <span>booking@raiseproduction.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4">Jam Operasional</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-between">
              <span>Senin - Jumat</span>
              <span class="text-[#f59e0b] font-medium">09:00 - 22:00</span>
            </li>
            <li class="flex justify-between">
              <span>Sabtu</span>
              <span class="text-[#f59e0b] font-medium">10:00 - 24:00</span>
            </li>
            <li class="flex justify-between">
              <span>Minggu</span>
              <span class="text-[#f59e0b] font-medium">10:00 - 22:00</span>
            </li>
          </ul>

          <!-- Social Media Icons -->
          <div class="flex gap-4 mt-6">
            <a 
              href="https://www.instagram.com/raise.production/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-xl hover:text-[#f59e0b] transition" 
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a 
              href="https://www.tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-xl hover:text-[#f59e0b] transition" 
              aria-label="TikTok"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-xl hover:text-[#f59e0b] transition" 
              aria-label="YouTube"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 text-center">
        <p class="text-sm">
          &copy; 2025 raise production. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>