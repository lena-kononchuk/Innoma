<template>
  <section class="video-section">
    <div class="wrapper" ref="videoSection">
      <div class="video-wrapper">
        <iframe
          v-if="isVisible"
          :src="videoUrl"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div v-else class="video-placeholder">
          Відео завантажується...
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoSection = ref(null)
const isVisible = ref(false)

const videoId = 'Pa0mdpXcHx8'
const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`

function onIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(onIntersection, { threshold: 0.5 })
  if (videoSection.value) observer.observe(videoSection.value)
})

onBeforeUnmount(() => {
  if (videoSection.value) observer.unobserve(videoSection.value)
})
</script>

<style scoped>
.wrapper iframe {
  width: 100%;
  height: 550px;
  display: block;
  border: none;
}
.video-wrapper {
  width: 100%;
  height: 100%;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}
</style>

