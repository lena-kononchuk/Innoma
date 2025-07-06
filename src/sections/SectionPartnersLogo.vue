<template>
  <section class="section">
    <div class="wrapper">
      <div class="h3 box2x blue center-xs start-md">Наші партнери</div>
      <div class="slider">
        <div class="slider-track">
          <div class="slider-items">
            <img
              v-for="(logo, index) in extendedLogos"
              :key="index"
              :src="`./images/partners/${logo}`"
              alt="partner logo"
              class="card-swiper"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  'logo.png', 'logo2.png',
  'logo3.png', 'logo4.png',
  'logo5.png', 'logo6.png',
  'logo7.png', 'logo8.png',
];

const extendedLogos = [...logos, ...logos];
</script>

<style scoped>

.slider {
  border-radius: 16px;
  /* background: rgb(255, 255, 255); */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(7.4px);
  /* border: 1px solid rgba(255, 255, 255, 0.4); */
  overflow: hidden;
  position: relative;
}

.slider-track {
  width: max-content;
  display: flex;
  animation: scroll 30s linear infinite;
}

.slider-items {
  display: flex;
  gap: 20px;
}

.card-swiper {

  object-fit: contain;
  margin: 30px 0;

	padding: 20px;
    width: 288px;
    height: 80px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    /* display: flex;
    justify-content: center;
    align-items: center; */
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
