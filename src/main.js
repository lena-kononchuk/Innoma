
import { createApp } from 'vue'
import App from './App.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import './assets/styles/app.less'  

import scrollAnimate from './utils/useScrollAnimation.js'



const app = createApp(App)
// scrollToGeo globally
app.directive('scroll-animate', scrollAnimate)

app.component('scroll-parallax', ScrollParallax);
app.mount('#app')