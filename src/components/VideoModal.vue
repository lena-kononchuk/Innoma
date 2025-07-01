<template>
  <section class="video-section">
    <div class="wrapper">
      <div class="video-box" @click="playVideo" v-if="!isPlaying">
        <div class="overlay flex center-xs middle-xs">
			<div class="flex-vertical middle-xs">
				<span>Про акселераційну програму</span>
				<button class="button button__circle" aria-label="Play video" ><i class="fa-solid fa-play h5"></i></button>
				</div>

        </div>
      </div>
      <iframe
        v-else
        class="video-frame"
        :src="videoUrl"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isPlaying = ref(false)
const videoId = 'Twg6UcBkIds'
const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`

function playVideo() {
  isPlaying.value = true
}
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-box {
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.overlay {
  color: white;
  font-size: 1.2rem;
  text-align: center;
  z-index: 2;
}


.video-frame {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
