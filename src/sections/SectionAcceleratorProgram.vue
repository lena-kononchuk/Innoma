<template>
	<div class="section " v-scroll-animate >
		<div class="wrapper">
			<div class="h3 box2x blue center-xs start-md">Програма акселератора</div>

			<div class="module box" v-for="(mod, i) in modules" :key="i">
				<div class="module__header black flex middle-xs center-xs start-md" @click="toggle(i)">
					<span class="blue bold">{{ mod.module }}</span>
					<div class="black grow">{{ mod.title }}</div>
					<i
					class="fa-solid fa-chevron-down"
					:class="{ 'rotated': activeIndex === i }"
				></i>
				</div>

				<div class="module__topics" v-if="activeIndex === i">
					<div class="topic" v-for="(topic, j) in mod.topics" :key="j">
						{{ topic }}
					</div>

					<div class="topic blue-light" v-if="mod.extra">
						{{ mod.extra }}
					</div>
				</div>
			</div>
			<button class="button button--primary" data-scroll-to="program">Отримати програму</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

function toggle(index) {
	activeIndex.value = activeIndex.value === index ? null : index
}

const modules = [
	{
		module: 'Модуль 1',
		title: 'Тенденції та тренди сучасного світу',
		topics: [
			'Тема 1. Куди рухаються IT тренди? Аналітика Gartner, розбір звітів консалтингових компаній',
			'Тема 2. Ринки Близького Сходу, Азії, Латинської Америки',
			'Тема 3. Що таке внутрішні та зовнішні інновації? Як шукати інноваційні ідеї?',
		],
		extra: '9 відео роликів, вебінар із запрошеним експертом'
	},
	{
		module: 'Модуль 2',
		title: 'Стартап-підхід до створення міжнародного IT продукту',
		topics: [
			'Основи створення MVP для стартапу',
			'Методи тестування гіпотез',
			'Пошук інвесторів та презентація продукту'
		],
		extra: 'Практичні завдання та кейси від успішних стартапів'
	},
	{
		module: 'Модуль 3',
		title: 'Бізнес-моделювання та пошук Product Market Fit',
		topics: [
			'Створення бізнес-моделі за допомогою Lean Canvas',
			'Аналіз ринку та конкурентів',
			'Оцінка потреб цільової аудиторії'
		],
		extra: 'Воркшопи з побудови моделі і зворотний зв’язок від менторів'
	},
	{
		module: 'Модуль 4',
		title: 'Визначення ринку, пошук і дослідження цільової аудиторії',
		topics: [
			'Основи створення MVP для стартапу',
			'Методи тестування гіпотез',
			'Пошук інвесторів та презентація продукту'
		],
		extra: 'Практичні завдання та кейси від успішних стартапів'
	},
	{
		module: 'Модуль 5',
		title: 'Що таке MVP і чому це важливо',
		topics: []
	},
	{
		module: 'Модуль 6',
		title: 'Unit-економіка та фінансове моделювання',
		topics: []
	},
	{
		module: 'Модуль 7',
		title: 'Що таке дорожня карта продукту?',
		topics: []
	},
	{
		module: 'Модуль 8',
		title: 'Документи для міжнародних інвесторів',
		topics: []
	},
	{
		module: 'Модуль 9',
		title: 'Відкриття юридичної особи. Можливості для стартапів',
		topics: []
	},
]



</script>

