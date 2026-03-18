
import { createApp } from 'vue'
import App from './App.vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import './assets/styles/app.less'
import LazyBg from './directives/lazyBackgrounds.js'
import scrollAnimate from './utils/useScrollAnimation.js'



const app = createApp(App)
// scrollToGeo globally
// app.directive('scroll-animate', scrollAnimate)
app.directive('lazy-bg', LazyBg)
app.component('scroll-parallax', ScrollParallax);
app.mount('#app')
