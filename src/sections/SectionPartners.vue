<template>
  <section
    class="section blue-bg background" v-scroll-animate
    :style="{ backgroundImage: 'url(./images/partner.jpg)' }"
  >
    <div class="wrapper">
      <div class="row" style="height: 100%;">
        <div class="col-xs-12 col-sm-12 col-md-5 box">
          <div class="flex-center">
            <div class="center-xs start-md">
              <div class="h3 box white">Потрапте на радари інвесторів та партнерів</div>
              <div class="box2x">
                У результаті проходження навчання ми створимо профілі вашої компанії на всіх міжнародних скаутингових платформах.
              </div>
              <button class="button button--secondary" data-scroll-to="contact">Записатися в акселератор</button>
            </div>
          </div>
        </div>

        <div class="col-xs-12  col-sm-12  col-md-5 col-md-offset-1">
            <div
              class="logo-item"
              v-for="(logo, index) in logos"
              :key="index"
            >
              <img :src="logo" alt="Partner Logo" />
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  './images/logo/partners1.png',
  './images/logo/partners2.png',
  './images/logo/partners3.png',
  './images/logo/partners4.png',
  './images/logo/partners5.png',
  './images/logo/partners6.png',
]
</script>

<style scoped>
.logo-item img {
  width: 100%;
  height: 111px;
  border-radius: 10px;
  object-fit: contain;
}

.col-md-offset-1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(3, auto);  
  gap: 20px;


}

</style>
