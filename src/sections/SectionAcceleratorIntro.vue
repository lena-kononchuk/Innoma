<template>
  <section class="section" ref="videoSection"  id="accelerator" v-scroll-animate>
    <div class="wrapper">
      <div class="h3  box2x blue">Про акселератор IT бізнесу</div>

      <div class="row center-xs box2x">
        <div class="col-xs-12 col-sm-4" v-for="item in cards" :key="item.id">
          <div class="card card--large flex-vertical gap box">
						<div class="card__icon">
							<img :src="item.icon" alt="" />
						</div>

            <div class="font black-light">{{ item.title }}</div>
          </div>
        </div>
      </div>

			<VideoModal />
    </div>
  </section>
</template>

<script setup>

import VideoModal from '../components/VideoModal.vue'

const cards = [
  {
    id: 1,
    title: '3 місяці навчання',
    icon: '/images/accelerator/num.svg'
  },
  {
    id: 2,
    title: 'Запрошені експерти',
    icon: '/images/accelerator/experts.svg'
  },
  {
    id: 3,
    title: 'Персональний менеджер',
    icon: '/images/accelerator/manager.svg'
  }
]

</script>
