<template>
  <section
    class="section blue-bg background"
    :style="{ backgroundImage: 'url(/images/partner.jpg)' }"
  >
    <div class="wrapper">
      <div class="row" style="height: 100%;">
        <div class="col-xs-12 col-sm-5 ">
          <div class="flex-center">
            <div>
              <div class="h3 box white">Потрапте на радари інвесторів та партнерів</div>
              <div class="box2x">
                У результаті проходження навчання ми створимо профілі вашої компанії на всіх міжнародних скаутингових платформах.
              </div>
              <button class="button button--secondary">Записатися в акселератор</button>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-5 col-sm-offset-1">
          <div class="row">
            <div
              class="col-xs-12 col-sm-6 logo-item"
              v-for="(logo, index) in logos"
              :key="index"
            >
              <img :src="logo" alt="Partner Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  '/images/logo/partners1.png',
  '/images/logo/partners2.png',
  '/images/logo/partners3.png',
  '/images/logo/partners4.png',
  '/images/logo/partners5.png',
  '/images/logo/partners6.png',
]
</script>

<style scoped>
.logo-item img {
  width: 205.85px;
  height: 111.93px;
  border-radius: 10px;
  object-fit: contain;
}
</style>
