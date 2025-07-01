<template>
	<div class="section">
		<div class="wrapper">
			<div class="h3 box2x blue">Програма акселератора</div>

			<div class="module box" v-for="(mod, i) in modules" :key="i">
				<div class="module__header black flex middle-xs" @click="toggle(i)">
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
			<button class="button button--primary">Отримати програму</button>
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

<style scoped>
.module {
	margin-bottom: 1rem;
}

.module__header {
	background: white;
	width: 100%;
	padding: 1rem;
	cursor: pointer;
	border-radius: 6px;
	box-shadow: 0px 0px 30px 0px #00000017;
}
.module__topics {
	box-shadow: 0px 0px 30px 0px #00000017;
}
.module__topics .topic {
	border-top: 1px solid #E9E9E9;
	padding: 12px 16px;
	font-size: 14px;
	color: #2D2D2D;
	background: #fff;

}
.rotated {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>