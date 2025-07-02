<template>
	<section class="geo" id="geo-section" v-scroll-animate>
		<div class="wrapper">
			<div class="h3  box2x blue">Географія нашої діяльності</div>

			<ul class="geo__tabs">
				<li v-for="tab in tabs" :key="tab" :class="['geo__tab', { 'geo__tab--active': currentTab === tab }]"
					@click="currentTab = tab">
					{{ tab }}
				</li>
			</ul>

			<div class="geo__section">
				<div class="row">
					<div class="col-xs-12 col-sm-5">
						<div class="geo__info flex-vertical ">
							<div class="h5 black">
								Чим цікавий <br />
								<span class="green">ринок MENA</span>
							</div>
							<div class="black grow">
								{{ countries[currentTab] }}
							</div>
							<button class="button button--primary" type="button" data-scroll-to="price">Вихід на ринок</button>
							<div class="flex middle-xs">
							<img :src="managers[currentTab].avatar" :alt="'Менеджер ' + managers[currentTab].name" class="avatar avatar--small" />
							<div>
								<div class="text-small black bold">{{ managers[currentTab].name }}</div>
								<div class="text-smaller black">{{ managers[currentTab].role }}</div>
							</div>
						</div>
						</div>

					</div>


					<div class="geo__cards col-xs-12 col-sm-7">
						<div class="geo__card-list black f" v-if="regions[currentTab]">
							<div v-for="(item, index) in regions[currentTab]" :key="index" :class="['geo__card flex middle-xs center-xs', {
								'geo__card--active': item.active,
								'geo__card--download': item.download
							}]">
								<template v-if="item.download">
									<button class="button button--large" @click="downloadItem(item)">
										<i class="fas fa-download"></i>
										<span v-html="item.desc" />
									</button>
								</template>

								<template v-else>
								<div>
									<div class="h3 light">
										{{ item.value }} <span v-if="item.unit">{{ item.unit }}</span>
									</div>
									<div class="grey-light">{{ item.desc }}</div>
								</div>
								</template>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Близький Схід', 'Азія', 'Латинська Америка', 'Африка']
const currentTab = ref('Близький Схід')

const regions = {
	'Близький Схід': [
		{ value: '>5,5', unit: 'Млрд', desc: 'Інвестиції pre-seed, seed', active: true },
		{ value: '>300', desc: 'Акселераторів, інкубаторів' },
		{ value: '73', desc: 'Венчурних фондів' },
		{ download: true, desc: 'Скачати звіт<br>по ринку MENA' }
	],
	'Азія': [
		{ value: '>6,8', unit: 'Млрд', desc: 'Інвестиції' },
		{ value: '500', desc: 'Інкубаторів' },
		{ value: '120', desc: 'Фондів' },
		{ download: true, desc: 'Скачати звіт<br>по ринку Азії' }
	],
	'Латинська Америка': [
		{ value: '>2,1', unit: 'Млрд', desc: 'Інвестиції' },
		{ value: '150', desc: 'Інкубаторів' },
		{ value: '60', desc: 'Фондів' },
		{ download: true, desc: 'Скачати звіт<br>по ринку Лат. Америки' }
	],
	'Африка': [
		{ value: '>1,3', unit: 'Млрд', desc: 'Інвестиції' },
		{ value: '200', desc: 'Інкубаторів' },
		{ value: '80', desc: 'Фондів' },
		{ download: true, desc: 'Скачати звіт<br>по ринку Африки' }
	]
}

const countries = {
	'Близький Схід': 'ОАЕ, Саудовська Аравія, Ізраїль, Оман, Бахрейн, Катар, Туніс, Йемен, Єгипет, Алжир',
	'Азія': 'Китай, Індія, Індонезія, Сінгапур, Вʼєтнам, Малайзія, Філіппіни, Таїланд',
	'Латинська Америка': 'Бразилія, Аргентина, Колумбія, Мексика, Перу, Чилі',
	'Африка': 'Нігерія, Кенія, ПАР, Єгипет, Ефіопія, Марокко, Гана'
}
const managers = {
  'Близький Схід': {
    name: 'Фатіма Юсуф',
    role: 'Менеджер по ринку MENA',
    avatar: '/images/avatar/experts3.png'
  },
  'Азія': {
    name: 'Юрій Кім',
    role: 'Менеджер по ринку Азії',
    avatar: '/images/avatar/experts1.png'
  },
  'Латинська Америка': {
    name: 'Ешлі Абрамс',
    role: 'Менеджер по Лат. Америці',
    avatar: '/images/avatar/experts2.png'
  },
  'Африка': {
    name: 'Майкл Донован',
    role: 'Менеджер по ринку Африки',
    avatar: '/images/avatar/experts4.png'
  }
}


</script>
