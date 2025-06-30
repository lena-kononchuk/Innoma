<template>
  <section class="section swiper">
    <div class="wrapper">
      <div class="slider-title">Експерти та трекери програми</div>

      <div class="swiper-navigation">
        <button class="swiper-button-prev"><i class="fa-solid fa-circle-arrow-left"></i></button>
        <button class="swiper-button-next"><i class="fa-solid fa-circle-arrow-right"></i></button>
      </div>

      <Swiper
        :modules="[Pagination, Navigation]"
        :slides-per-view="4"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        class="mySwiper swiper__wrapper"
      >
        <SwiperSlide v-for="(expert, i) in experts" :key="i">
          <div class="slide center-xs">
            <img :src="expert.logo" alt="avatar" class="avatar avatar--large box-smaller" />
            <div class="black text bold box-smaller">{{ expert.name }}</div>
            <div class="black text-small box-smaller description">{{ expert.description }}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'  

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const experts = [
  {
    name: 'Юрій Кім',
    description: 'Проведення дослідження цільової аудиторії для формування Product market fit',
    logo: '/images/avatar/experts1.png',
  },
  {
    name: 'Ешлі Абрамс',
    description: 'Аналіз ринку і визначення ключових клієнтських сегментів',
    logo: '/images/avatar/experts2.png',
  },
  {
    name: 'Фатімі Юсуф',
    description: 'Розробка стратегій виходу на нові ринки з фокусом на локальні особливості',
    logo: '/images/avatar/experts3.png',
  },
  {
    name: 'Майкл Донован',
    description: 'Оптимізація продукту на основі зворотного зв’язку від користувачів',
    logo: '/images/avatar/experts4.png',
  },
  {
    name: 'Фатімі Юсуф',
    description: 'Розробка стратегій виходу на нові ринки з фокусом на локальні особливості',
    logo: '/images/avatar/experts3.png',
  },
]
</script>



<style scoped>

.mySwiper .swiper-button-prev,
.mySwiper .swiper-button-next {
  color: black; 
}


.description {
  max-width: 200px;
	margin: 0 auto;
  word-wrap: break-word; 
}

.swiper-navigation {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 15px;
}

.swiper-button-prev,
.swiper-button-next {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  color: #007BFF; /* пример hover цвета */
}

</style>
