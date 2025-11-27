<template>
  <div class="pricing-section">
    <div class="container">
      <div class="pricing-header">
        <h1>Paket Dokumentasi</h1>
        <p>Pilih paket yang sesuai dengan kebutuhan Anda</p>
      </div>

      <div class="pricing-cards">
        <!-- Basic Package -->
        <div class="pricing-card">
          <div class="card-header">
            <h3>Basic</h3>
            <div class="price">
              <span class="currency">Rp</span>
              <span class="amount">2.500.000</span>
            </div>
            <p class="duration">per event</p>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>✓ Durasi sesi 4 jam</li>
              <li>✓ 1 Fotografer profesional</li>
              <li>✓ 100-150 foto edited</li>
              <li>✓ Foto dan video</li>
              <li>✓ Google Drive akses 1 bulan</li>
            </ul>
            <button class="btn-order" @click="selectPackage('basic')">Pilih Paket</button>
          </div>
        </div>

        <!-- Standard Package -->
        <div class="pricing-card featured">
          <div class="badge">Popular</div>
          <div class="card-header">
            <h3>Standard</h3>
            <div class="price">
              <span class="currency">Rp</span>
              <span class="amount">4.500.000</span>
            </div>
            <p class="duration">per event</p>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>✓ Durasi sesi 8 jam</li>
              <li>✓ 2 Fotografer profesional</li>
              <li>✓ 250-300 foto edited</li>
              <li>✓ Foto dan video</li>
              <li>✓ Google Drive akses 2 bulan</li>
              <li>✓ Video highlight 3-5 menit</li>
            </ul>
            <button class="btn-order" @click="selectPackage('standard')">Pilih Paket</button>
          </div>
        </div>

        <!-- Premium Package -->
        <div class="pricing-card">
          <div class="card-header">
            <h3>Premium</h3>
            <div class="price">
              <span class="currency">Rp</span>
              <span class="amount">7.500.000</span>
            </div>
            <p class="duration">per event</p>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>✓ Durasi sesi unlimited</li>
              <li>✓ 3 Fotografer + 1 Videografer</li>
              <li>✓ 500+ foto edited</li>
              <li>✓ Foto dan video</li>
              <li>✓ Google Drive akses 3 bulan</li>
              <li>✓ Video cinematic 10-15 menit</li>
              <li>✓ Drone footage</li>
              <li>✓ Album foto premium 30x40cm</li>
            </ul>
            <button class="btn-order" @click="selectPackage('premium')">Pilih Paket</button>
          </div>
        </div>
      </div>

      <div class="pricing-note">
        <p>*Harga dapat disesuaikan berdasarkan lokasi dan kebutuhan khusus</p>
        <p>Hubungi kami untuk konsultasi gratis dan penawaran khusus</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const selectPackage = (packageType) => {
  // Navigate to contact page with package selection
  router.push({
    path: '/contact',
    query: { package: packageType }
  });
};
</script>

<style scoped>
.pricing-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e5e5e5 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-header {
  text-align: center;
  margin-bottom: 60px;
}

.pricing-header h1 {
  font-size: 3rem;
  color: #1f2937;
  margin-bottom: 15px;
  font-weight: 700;
}

.pricing-header p {
  font-size: 1.2rem;
  color: #6b7280;
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.pricing-card.featured {
  border: 3px solid #f59e0b;
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.badge {
  position: absolute;
  top: 20px;
  right: -35px;
  background: #f59e0b;
  color: white;
  padding: 5px 40px;
  transform: rotate(45deg);
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.card-header {
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  color: white;
  padding: 40px 30px;
  text-align: center;
}

.pricing-card.featured .card-header {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.card-header h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.price {
  margin-bottom: 10px;
}

.currency {
  font-size: 1.5rem;
  vertical-align: top;
  margin-right: 5px;
}

.amount {
  font-size: 2.5rem;
  font-weight: 700;
}

.duration {
  font-size: 1rem;
  opacity: 0.9;
}

.card-body {
  padding: 40px 30px;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.features li {
  padding: 12px 0;
  color: #555;
  font-size: 1rem;
  border-bottom: 1px solid #ecf0f1;
}

.features li:last-child {
  border-bottom: none;
}

.btn-order {
  width: 100%;
  padding: 15px 30px;
  background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-order:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(31, 41, 55, 0.4);
}

.pricing-card.featured .btn-order {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.pricing-card.featured .btn-order:hover {
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.4);
}

.pricing-note {
  text-align: center;
  margin-top: 40px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.pricing-note p {
  color: #6b7280;
  margin: 10px 0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .pricing-header h1 {
    font-size: 2rem;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: scale(1);
  }

  .pricing-card.featured:hover {
    transform: translateY(-10px);
  }

  .card-header h3 {
    font-size: 1.5rem;
  }

  .amount {
    font-size: 2rem;
  }
}
</style>
