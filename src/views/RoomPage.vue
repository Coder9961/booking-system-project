<script setup>

import TopHeader from '@/components/TopHeader.vue'
import Footer from '@/components/Footer.vue'

</script>
    
<template>
    <div>
        <TopHeader />

        <div class="rooms-section">
    <h2 class="section-title">ROOMS</h2>
    <h3 class="section-subtitle">Our Rooms & Rates</h3>
    <div class="rooms-container">
      <div class="room-card">
        <div class="room-image">
          <img src="../assets/images/sample-room.jpg" alt="Room Image">
        </div>
        <div class="room-info">
          <h4 class="room-title">Aircon</h4>
          <p class="room-rate">100 / Per Night</p>
          <p class="room-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p class="room-details">8 person <span class="room-bed">Standard Bed</span></p>
          <button class="book-now">Book Now</button>
        </div>
      </div>
      <div class="room-card">
        <div class="room-image">
          <img src="../assets/images/sample-room.jpg" alt="Room Image">
        </div>
        <div class="room-info">
          <h4 class="room-title">Aircon</h4>
          <p class="room-rate">100 / Per Night</p>
          <p class="room-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p class="room-details">8 person <span class="room-bed">Standard Bed</span></p>
          <button class="book-now">Book Now</button>
        </div>
      </div>
      <div class="room-card">
        <div class="room-image">
          <img src="../assets/images/sample-room.jpg" alt="Room Image">
        </div>
        <div class="room-info">
          <h4 class="room-title">Aircon</h4>
          <p class="room-rate">100 / Per Night</p>
          <p class="room-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p class="room-details">8 person <span class="room-bed">Standard Bed</span></p>
          <button class="book-now">Book Now</button>
        </div>
      </div>
      <div class="room-card">
        <div class="room-image">
          <img src="../assets/images/sample-room.jpg" alt="Room Image">
        </div>
        <div class="room-info">
          <h4 class="room-title">Aircon</h4>
          <p class="room-rate">100 / Per Night</p>
          <p class="room-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
          <p class="room-details">8 person <span class="room-bed">Standard Bed</span></p>
          <button class="book-now">Book Now</button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    font-family: 'Poppins', sans-serif;
}
    .rooms-section {
  margin-top: 20px;
  text-align: center;
  padding: 40px 20px;
}

.section-title {
  color: #a67c52;
  font-size: 18px;
  letter-spacing: 2px;
}

.section-subtitle {
  margin: 10px 0 40px;
  font-size: 24px;
  font-weight: bold;
}

.rooms-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.room-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: calc(50% - 10px);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.room-image {
  height: 300px;
  background: #ccc;
}

.room-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-info {
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.room-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.room-rate {
  color: #a67c52;
  font-size: 16px;
  margin-bottom: 10px;
}

.room-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  flex-grow: 1;
}

.room-details {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.room-bed {
  font-weight: bold;
}

.book-now {
  padding: 10px 20px;
  background: #a67c52;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.book-now:hover {
  background: #8b643a;
}

@media (max-width: 768px) {
  .room-card {
    width: 100%;
  }

  .rooms-section {
  margin-top: 30px;
}
}

</style>