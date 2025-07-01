<template>
  <div class="hero-section">
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
          <div class="h3 box green-bg white">
            <slot name="title" />
          </div>
          <div class="text box white">
            <slot name="text" />
          </div>
          <slot name="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import Ukiyo from 'ukiyojs'

const props = defineProps({
  bgImage: {
    type: String,
    required: true,
  },
})

const backgroundImage = ref(null)
let parallaxInstance = null

onMounted(() => {
  if (backgroundImage.value) {
    parallaxInstance = new Ukiyo(backgroundImage.value, {
      scale: 1.5,
      speed: 1.2,
      willChange: true,
    })
  }
})

onBeforeUnmount(() => {
  if (parallaxInstance) {
    parallaxInstance.destroy()
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.background__small {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 604px;
  background-size: cover;
  background-position: center;
  z-index: 0;
}


.wrapper {
  z-index: 1;
}
</style>
