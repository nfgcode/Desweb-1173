<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import heroBg from '../assets/hero-bg.png';

const route = useRoute();

const form = ref({
  nama: '',
  noHp: '',
  paket: '',
  email: '',
  pesan: ''
});

// Pre-select package from query parameter
onMounted(() => {
  if (route.query.package) {
    const packageValue = route.query.package.toLowerCase();
    if (['basic', 'standard', 'premium'].includes(packageValue)) {
      form.value.paket = packageValue;
      // Scroll to form section
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }
});

const showMapPopup = ref(false);
const showSuccessPopup = ref(false);
const isSubmitting = ref(false);
const submitStatus = ref(null); 

const paketOptions = [
  { value: 'basic', label: 'Basic - Rp 2.500.000', price: 'Rp 2.500.000' },
  { value: 'standard', label: 'Standard - Rp 4.500.000', price: 'Rp 4.500.000' },
  { value: 'premium', label: 'Premium - Rp 7.500.000', price: 'Rp 7.500.000' }
];

const isFormValid = computed(() => {
  return form.value.nama.trim() && 
         form.value.noHp.trim() && 
         form.value.paket.trim() &&
         form.value.email.trim() &&
         form.value.pesan.trim();
});

const openMap = () => {
  showMapPopup.value = true;
  document.body.style.overflow = 'hidden';
};

const closeMapPopup = () => {
  showMapPopup.value = false;
  document.body.style.overflow = '';
};

const closeSuccessPopup = () => {
  showSuccessPopup.value = false;
  document.body.style.overflow = '';
};

const submitForm = async (e) => {
  e.preventDefault();
  
  if (!isFormValid.value) {
    submitStatus.value = 'error';
    setTimeout(() => {
      submitStatus.value = null;
    }, 3000);
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = null;

  setTimeout(() => {
    // Get selected package label
    const selectedPaket = paketOptions.find(p => p.value === form.value.paket);
    const paketLabel = selectedPaket ? selectedPaket.label : form.value.paket;
    
    // Format WhatsApp message
    const message = `Halo Raise Production!

Saya ingin melakukan booking dengan detail sebagai berikut:

*Nama:* ${form.value.nama}
*No. HP:* ${form.value.noHp}
*Paket:* ${paketLabel}

*Pesan:*
${form.value.pesan}

Mohon informasi lebih lanjut. Terima kasih!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number (remove spaces and hyphens)
    const whatsappNumber = '6282213515177';
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    isSubmitting.value = false;
    showSuccessPopup.value = true;
    document.body.style.overflow = 'hidden';
    
    form.value = {
      nama: '',
      noHp: '',
      paket: '',
      email: '',
      pesan: ''
    };
  }, 1500);
};

const handleAddressClick = () => {
  // Open Google Maps with Raise Production location
  const mapsUrl = 'https://www.google.com/maps/place/Raise+Production/@-1.2326585,116.8123072,17z/data=!3m1!4b1!4m6!3m5!1s0x2df1470019c49bb5:0xb8dc3e335833f79!8m2!3d-1.2326585!4d116.8148821!16s%2Fg%2F11y2wcd8v8?entry=ttu';
  window.open(mapsUrl, '_blank');
};

const handlePhoneClick = () => {
  // Open WhatsApp
  const whatsappNumber = '6282213515177';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  window.open(whatsappUrl, '_blank');
};

const handleEmailClick = () => {
  // Open email client
  const email = 'booking@raiseproduction.com';
  const subject = 'Pertanyaan tentang Raise Production';
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoUrl;
};

const contactInfo = [
  {
    icon: 'fa-phone',
    iconColor: 'text-gray-400',
    title: 'TELEPON',
    content: ['62 822-1351-5177'],
    clickable: true,
    onClick: handlePhoneClick,
    clickHint: 'Klik untuk chat WhatsApp'
  },
  {
    icon: 'fa-location-dot',
    iconColor: 'text-gray-400',
    title: 'LOKASI',
    content: ['QR87+WXJ, Jl. Letjen Suprapto, Baru Ilir, Kec. Balikpapan Bar., Kota Balikpapan, Kalimantan Timur'],
    clickable: true,
    onClick: handleAddressClick,
    clickHint: 'Klik untuk buka di Maps'
  },
  {
    icon: 'fa-clock',
    iconColor: 'text-gray-400',
    title: 'JAM OPERASIONAL',
    content: ['Senin - Jumat: 09:00 - 22:00', 'Sabtu: 10:00 - 24:00', 'Minggu: 10:00 - 22:00'],
    clickable: false
  },
  {
    icon: 'fa-envelope',
    iconColor: 'text-gray-400',
    title: 'EMAIL KAMI',
    content: ['booking@raiseproduction.com'],
    clickable: true,
    onClick: handleEmailClick,
    clickHint: 'Klik untuk kirim email'
  }
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section 
      class="relative text-white py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-4 overflow-hidden bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/75 via-black/70 to-gray-900/75"></div>

      <div class="max-w-7xl mx-auto relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Hubungi Kami
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Ada pertanyaan? Tim kami siap membantu Anda
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-12 px-6 sm:px-8 lg:px-4 -mt-8">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(info, index) in contactInfo" 
            :key="index"
            @click="info.clickable ? info.onClick() : null"
            class="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 relative"
            :class="{
              'cursor-pointer': info.clickable,
              'cursor-default': !info.clickable
            }"
          >
            <div class="relative z-10 text-center">
              <div class="flex justify-center mb-4">
                <i 
                  :class="['fa-solid', info.icon, 'text-3xl', info.iconColor]"
                ></i>
              </div>
              <h3 class="text-xs font-bold text-gray-900 mb-3 tracking-wide uppercase">{{ info.title }}</h3>
              <div class="text-sm text-gray-600 leading-relaxed">
                <p v-for="(line, idx) in info.content" :key="idx" :class="{ 'mb-1': idx < info.content.length - 1 }">
                  {{ line }}
                </p>
              </div>
            </div>
            
            <!-- Hover underline -->
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-[#fb923c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-12 px-6 sm:px-8 lg:px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <div id="contact-form" class="bg-white rounded-lg p-8 shadow-sm">
          <form 
            @submit="submitForm" 
            class="space-y-6"
          >
            <!-- Name & Rank Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="nama"
                  v-model.trim="form.nama"
                  class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-black 
                         focus:ring-0 focus:border-[#f59e0b] 
                         outline-none transition-all duration-200 text-gray-800
                         placeholder-gray-400"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div>
                <select
                  id="paket"
                  v-model="form.paket"
                  class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-black 
                         focus:ring-0 focus:border-[#f59e0b] 
                         outline-none transition-all duration-200 text-gray-800
                         cursor-pointer appearance-none"
                  required
                >
                  <option value="" disabled class="text-gray-400">Pilih Paket</option>
                  <option v-for="paket in paketOptions" :key="paket.value" :value="paket.value" class="text-gray-800">
                    {{ paket.label }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Email & Contract Number Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  id="email"
                  v-model.trim="form.email"
                  class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-black 
                         focus:ring-0 focus:border-[#f59e0b] 
                         outline-none transition-all duration-200 text-gray-800
                         placeholder-gray-400"
                  placeholder="Alamat Email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="noHp"
                  v-model.trim="form.noHp"
                  class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-black 
                         focus:ring-0 focus:border-[#f59e0b] 
                         outline-none transition-all duration-200 text-gray-800
                         placeholder-gray-400"
                  placeholder="Nomor Telepon"
                  required
                />
              </div>
            </div>

            <!-- Comments -->
            <div>
              <textarea
                id="pesan"
                v-model.trim="form.pesan"
                rows="4"
                class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-black 
                       focus:ring-0 focus:border-[#f59e0b] 
                       outline-none transition-all duration-200 resize-none text-gray-800
                       placeholder-gray-400"
                placeholder="Pesan Anda"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center pt-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="group inline-flex items-center justify-center gap-2 
                       bg-gradient-to-r from-[#f59e0b] to-[#fb923c] text-white px-12 py-3.5 rounded-lg font-medium 
                       border-2 border-transparent hover:border-[#f59e0b] hover:from-[#fb923c] hover:to-[#f59e0b]
                       transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#f59e0b]/50
                       active:scale-95 hover:scale-105 relative overflow-hidden
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <i 
                  :class="['fa-solid', isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane', 'group-hover:scale-110 transition-all duration-300 relative z-10']"
                ></i>
                <span class="relative z-10">{{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Map Popup Modal -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showMapPopup"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="closeMapPopup"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="showMapPopup"
            class="bg-white rounded-2xl w-full shadow-2xl
                   max-w-3xl lg:max-w-5xl 
                   max-h-[85vh] lg:max-h-[80vh]
                   flex flex-col"
            @click.stop
          >
            <div class="flex items-center justify-between p-4 lg:p-5 border-b border-gray-200 bg-gradient-to-r from-black to-gray-800 rounded-t-2xl shrink-0">
              <h3 class="text-lg lg:text-xl font-bold text-white flex items-center gap-2">
                <i class="fa-solid fa-map-marker-alt"></i>
                Lokasi RaiseProduction
              </h3>
              <button
                @click="closeMapPopup"
                class="text-white/80 hover:text-white transition p-2 hover:bg-white/10 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close modal"
              >
                <i class="fa-solid fa-xmark text-xl lg:text-2xl"></i>
              </button>
            </div>

            <div class="flex-1 flex flex-col p-4 lg:p-5 overflow-hidden">
              <div class="flex-1 rounded-lg overflow-hidden shadow-lg mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8950121631087!2d116.81230717445274!3d-1.2326585355687762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470019c49bb5%3A0xb8dc3e335833f79!2sRaise%20Production!5e0!3m2!1sen!2sid!4v1763104291217!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style="border:0; min-height: 300px;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="w-full h-full"
                ></iframe>
              </div>

              <div class="bg-linear-to-r from-blue-50 to-blue-100 rounded-lg p-4 lg:p-5 border border-blue-200 shrink-0">
                <div class="flex items-start gap-3 lg:gap-4">
                  <div class="bg-[#f59e0b] text-white w-11 h-11 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-location-dot text-lg lg:text-xl"></i>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="font-bold text-gray-800 mb-2 text-base lg:text-lg">Alamat Lengkap:</p>
                    <div class="text-sm lg:text-base text-gray-700 leading-relaxed space-y-0.5">
                      <p class="font-medium">RaiseProduction</p>
                      <p>QR87+WXJ, Jl. Letjen Suprapto, Baru Ilir, Kec. Balikpapan Bar., Kota Balikpapan, Kalimantan Timur</p>
                      <p>Balikpapan Baru, Kalimantan Timur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Success Popup Modal -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showSuccessPopup"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="closeSuccessPopup"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="showSuccessPopup"
            class="bg-white rounded-2xl w-full max-w-md shadow-2xl p-8 text-center"
            @click.stop
          >
            <div class="mb-6">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-check text-4xl text-green-500"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">Terima Kasih!</h3>
              <p class="text-gray-600 leading-relaxed">
                Pesan Anda telah berhasil dikirim. Mohon menunggu, tim kami akan segera menghubungi Anda.
              </p>
            </div>
            <button
              @click="closeSuccessPopup"
              class="w-full bg-[#f59e0b] text-white px-6 py-3 rounded-lg font-medium 
                     hover:bg-[#d97706] active:scale-95
                     transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Tutup
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
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
  animation: fade-in 0.6s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.6s ease-out 0.2s both;
}
</style>