<template>
  <teleport to="body">
    <transition name="slide-fade">
      <div v-if="isOpen" class="mobile-menu">
        <button class="close-btn" @click="$emit('close')">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <ul class="menu center-xs">
          <li v-for="item in menuItems" :key="item.id" class="header__item">
            <a
              class="header__link nowrap"
              :href="item.href"
              @click.prevent="onClick(item.href)"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

const menuItems = [
  { id: 1, title: 'Хто ми?', href: '#about' },
  { id: 2, title: 'Послуги', href: '#services' },
  { id: 3, title: 'Акселератор', href: '#accelerator' },
  { id: 4, title: 'Новини', href: '#news' },
];

const onClick = (href) => {
  emit('close');
  const targetId = href.slice(1);
  const targetEl = document.getElementById(targetId);
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

</style>
