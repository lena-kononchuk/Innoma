
<template>
  <div class="hero-section">
    <!-- Параллакс-фон -->
    <div
      class="background background__small ukiyo"
      ref="backgroundImage"
      :style="{ backgroundImage: `url('${bgImage}')` }"
    >
      <div class="overlay"></div>
    </div>
    <div class="section section--large">
    <div class="wrapper relative">
      <div class="center-xs">
        <div class="h3 box  green-bg">
          Навчіться досліджувати іноземні ринки
          і відкрийте нові можливості для свого бізнесу
        </div>
        <div class="text box">
          Наша команда допоможе вам вивчити ринки Близького Сходу, Азії, Латинської Америки та Африки
        </div>
        <button class="button button--primary" type="button">Отримати консультацію</button>
      </div>
    </div>
	</div>
  </div>
</template>


<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import bgImage from '/images/background/markets.jpg'

import Ukiyo from 'ukiyojs'

const backgroundImage = ref(null)
let parallaxInstance = null

onMounted(() => {
  if (backgroundImage.value) {
    parallaxInstance = new Ukiyo(backgroundImage.value, {
      scale: 1.5,
      speed: 1.2,
      willChange: true
    })
  }
})

onBeforeUnmount(() => {
  if (parallaxInstance) {
    parallaxInstance.destroy()
  }
})
</script>

<style  scoped>
	.hero-section {
  position: relative;
  overflow: hidden;
}

.background__small {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100vh;
	position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 604px; 
  background-size: cover;
  background-position: center;
  z-index: 0;

  background-size: cover;
  background-position: center;
  z-index: 0;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.wrapper {
  z-index: 1;
}

</style>