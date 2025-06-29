<template>
	<header class="header wrapper flex middle-xs between-xs">
		<a href="#" class="logo"></a>
		<ul class="header__menu start-xs center-md grow gap">
			<li class="header__item"> <a class="header__link nowrap" href="#about">Хто ми?</a>
			</li>
			<li class="header__item"> <a class="header__link nowrap" href="#services">Послуги</a>
			</li>
			<li class="header__item"> <a class="header__link nowrap" href="#accelerator">Акселератор</a>
			</li>
			<li class="header__item">
				<a class="header__link nowrap" href="#news">Новини</a>
			</li>
		</ul>

		<button class="button button--secondary" type="button">Увійти</button>
	</header>

</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
	isMenuOpen.value = !isMenuOpen.value;
	document.querySelector('.header').classList.toggle('header_open', isMenuOpen.value);
}
</script>
