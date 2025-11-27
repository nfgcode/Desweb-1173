<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const form = ref({
  nama: '',
  noHp: '',
  paket: '',
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
         form.value.paket &&
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
      pesan: ''
    };
  }, 1500);
};

const handleAddressClick = () => {
  // Open Google Maps with the address
  const address = 'QR87+WXJ, Jl. Letjen Suprapto, Baru Ilir, Kec. Balikpapan Bar., Kota Balikpapan, Kalimantan Timur';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
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
  const email = 'Service@raiseproduction.com';
  const subject = 'Pertanyaan tentang Raise Production';
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  window.location.href = mailtoUrl;
};

const contactInfo = [
  {
    icon: 'fa-location-dot',
    iconColor: 'text-[#155DFC]',
    title: 'Alamat',
    content: ['QR87+WXJ, Jl. Letjen Suprapto, Baru Ilir, Kec. Balikpapan Bar., Kota Balikpapan, Kalimantan Timur'],
    clickable: true,
    onClick: handleAddressClick,
    clickHint: 'Klik untuk buka di Maps'
  },
  {
    icon: 'fa-phone',
    iconColor: 'text-[#155DFC]',
    title: 'Telepon',
    content: ['62 822-1351-5177'],
    subtitle: 'WhatsApp available',
    clickable: true,
    onClick: handlePhoneClick,
    clickHint: 'Klik untuk chat WhatsApp'
  },
  {
    icon: 'fa-envelope',
    iconColor: 'text-[#155DFC]',
    title: 'Email',
    content: ['Service@raiseproduction.com'],
    clickable: true,
    onClick: handleEmailClick,
    clickHint: 'Klik untuk kirim email'
  },
  {
    icon: 'fa-clock',
    iconColor: 'text-[#155DFC]',
    title: 'Jam Operasional',
    content: ['Senin - Jumat: 06:00 - 23:00', 'Sabtu: 07:00 - 24:00', 'Minggu: 07:00 - 22:00'],
    clickable: false
  }
];
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-black/75 via-black/70 to-gray-900/75 text-white py-16 sm:py-20 px-6 sm:px-8 lg:px-4 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Hubungi Kami
        </h1>
        <p class="text-lg md:text-xl text-white/90 max-w-2xl animate-fade-in-delay">
          Ada pertanyaan? Tim kami siap membantu Anda. Hubungi kami melalui form atau informasi kontak di bawah ini
        </p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-16 px-6 sm:px-8 lg:px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(info, index) in contactInfo" 
            :key="index"
            @click="info.clickable ? info.onClick() : null"
            class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            :class="{
              'cursor-pointer active:scale-95': info.clickable,
              'cursor-default': !info.clickable
            }"
          >
            <!-- Click hint overlay -->
            <div 
              v-if="info.clickable" 
              class="absolute top-2 right-2 bg-[#f59e0b] text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
            >
              <i class="fa-solid fa-hand-pointer text-xs"></i>
              <span class="hidden sm:inline">{{ info.clickHint }}</span>
            </div>
            
            <!-- Animated background gradient -->
            <div 
              v-if="info.clickable"
              class="absolute inset-0 bg-gradient-to-r from-[#f59e0b]/0 via-[#f59e0b]/5 to-[#f59e0b]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            
            <div class="relative z-10">
              <div class="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f59e0b] transition-all duration-300" :class="{ 'group-hover:scale-110': info.clickable }">
                <i 
                  :class="['fa-solid', info.icon, 'text-2xl', 'group-hover:text-white', 'transition-all', 'duration-300', 'text-[#f59e0b]', { 'group-hover:animate-pulse': info.clickable }]"
                ></i>
              </div>
              <h3 class="text-lg font-medium text-gray-800 mb-3 group-hover:text-[#f59e0b] transition-colors duration-300">{{ info.title }}</h3>
              <div class="text-sm text-gray-700 leading-relaxed">
                <p v-for="(line, idx) in info.content" :key="idx" :class="{ 'mb-1': idx < info.content.length - 1, 'font-medium': info.clickable }">
                  {{ line }}
                </p>
                <p v-if="info.subtitle" class="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <i class="fa-brands fa-whatsapp text-green-500"></i>
                  {{ info.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Form & Map Section -->
    <section class="py-16 px-6 sm:px-8 lg:px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Kirim Pesan Section -->
          <div class="flex flex-col">
            <h2 class="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Kirim Pesan</h2>
            
            <div id="contact-form" class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1 relative overflow-hidden">
              <!-- Fixed Notification Area -->
              <div class="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                <div class="p-6 sm:p-8">
                  <!-- Success Alert -->
                  <Transition
                    enter-active-class="transition-all duration-300"
                    enter-from-class="opacity-0 -translate-y-4"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-200"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-4"
                  >
                    <div 
                      v-if="submitStatus === 'success'"
                      class="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 shadow-lg pointer-events-auto"
                    >
                      <i class="fa-solid fa-circle-check text-green-500 text-xl mt-0.5 shrink-0"></i>
                      <div>
                        <p class="font-medium text-green-800">Pesan Berhasil Dikirim!</p>
                        <p class="text-sm text-green-600 mt-1">Terima kasih. Kami akan segera menghubungi Anda.</p>
                      </div>
                    </div>
                  </Transition>

                  <!-- Error Alert -->
                  <Transition
                    enter-active-class="transition-all duration-300"
                    enter-from-class="opacity-0 -translate-y-4"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-200"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-4"
                  >
                    <div 
                      v-if="submitStatus === 'error'"
                      class="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 shadow-lg pointer-events-auto"
                    >
                      <i class="fa-solid fa-circle-exclamation text-red-500 text-xl mt-0.5 shrink-0"></i>
                      <div>
                        <p class="font-medium text-red-800">Gagal Mengirim Pesan</p>
                        <p class="text-sm text-red-600 mt-1">Mohon isi semua field dengan benar.</p>
                      </div>
                    </div>
                  </Transition>
                </div>
              </div>

              <!-- Form with Dynamic Padding -->
              <form 
                @submit="submitForm" 
                class="h-full flex flex-col space-y-4 transition-all duration-300"
                :class="{ 'pt-28': submitStatus }"
              >
                <!-- Nama & Email Row -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="nama" class="block text-sm font-medium text-gray-800">
                      Nama Lengkap <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nama"
                      v-model.trim="form.nama"
                      class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg 
                             focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent 
                             outline-none transition-all duration-200 text-sm
                             hover:border-gray-300"
                      placeholder="Masukkan nama lengkap Anda"
                      required
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="noHp" class="block text-sm font-medium text-gray-800">
                      Nomor HP (WhatsApp) <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="noHp"
                      v-model.trim="form.noHp"
                      class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg 
                             focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent 
                             outline-none transition-all duration-200 text-sm
                             hover:border-gray-300"
                      placeholder="08xxxxxxxxxx"
                      pattern="[0-9+\-\s]*"
                      required
                    />
                  </div>
                </div>

                <!-- Paket Pilihan -->
                <div class="space-y-2">
                  <label for="paket" class="block text-sm font-medium text-gray-800">
                    Pilih Paket <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="paket"
                    v-model="form.paket"
                    class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg 
                           focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent 
                           outline-none transition-all duration-200 text-sm
                           hover:border-gray-300 cursor-pointer"
                    required
                  >
                    <option value="" disabled>Pilih paket yang Anda inginkan</option>
                    <option v-for="paket in paketOptions" :key="paket.value" :value="paket.value">
                      {{ paket.label }}
                    </option>
                  </select>
                  <p class="text-xs text-gray-500 mt-1">
                    <i class="fa-solid fa-info-circle"></i> Harga dapat disesuaikan berdasarkan kebutuhan khusus
                  </p>
                </div>

                <!-- Pesan -->
                <div class="flex-1 flex flex-col space-y-2">
                  <label for="pesan" class="block text-sm font-medium text-gray-800">
                    Pesan <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    id="pesan"
                    v-model.trim="form.pesan"
                    class="w-full flex-1 min-h-[150px] px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg 
                           focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent 
                           outline-none transition-all duration-200 resize-none text-sm
                           hover:border-gray-300"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="!isFormValid || isSubmitting"
                  class="w-full bg-[#f59e0b] text-white px-6 py-3 rounded-lg font-medium 
                         hover:bg-[#d97706] active:scale-95
                         transition-all duration-300 shadow-md hover:shadow-lg 
                         flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#f59e0b]"
                >
                  <i 
                    :class="['fa-solid', isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane']"
                  ></i>
                  <span>{{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Lokasi Kami Section -->
          <div class="flex flex-col">
            <h2 class="text-2xl md:text-3xl font-medium text-gray-800 mb-6">Lokasi Kami</h2>
            
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1">
              <button
                @click="openMap"
                type="button"
                class="w-full h-full min-h-[300px] bg-linear-to-br from-gray-100 to-gray-200 rounded-xl 
                       flex flex-col items-center justify-center 
                       hover:from-gray-200 hover:to-gray-300
                       transition-all duration-300 cursor-pointer group
                       focus:outline-none focus:ring-2 focus:ring-[#155DFC] focus:ring-offset-2"
              >
                <div class="text-center">
                  <i class="fa-solid fa-map-location-dot text-6xl text-gray-300 mb-4 
                           group-hover:text-[#f59e0b] group-hover:scale-110 
                           transition-all duration-300"></i>
                  <p class="text-gray-400 font-medium group-hover:text-gray-800 transition-colors duration-300">
                    Klik untuk melihat Maps
                  </p>
                </div>
              </button>
            </div>
          </div>
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