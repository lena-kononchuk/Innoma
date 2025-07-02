<template>
  <section class="section swiper relative" v-scroll-animate>
    <div class="wrapper">
    	<div class="h3  box2x blue">Експерти і трекери програм</div>

      <div class="swiper-navigation box">
        <button class="custom-prev pointer"><i class="fa fa-arrow-left white"></i></button>
        <button class="custom-next pointer"><i class="fa fa-arrow-right white"></i></button>
      </div>
			<div class="swiper__wrapper">
				<Swiper
        :modules="[Pagination, Navigation]"
        :slides-per-view="4"
        :loop="true"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        class="mySwiper"
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
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
	{
    name: 'Ешлі Абрамс',
    description: 'Аналіз ринку і визначення ключових клієнтських сегментів',
    logo: '/images/avatar/experts2.png',
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
  color: #007BFF; 
}

</style>
