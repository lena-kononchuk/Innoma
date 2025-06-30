<template>
  <section class="section">
    <div class="wrapper">
			<div class="h3  box2x blue">Що ви отримаєте в результаті?</div>
			<div class="row center-xs">
			<div class="col-xs-10 col-sm-4" v-for="item in cards" :key="item.id" style="margin-bottom: 20px;">
				<div class="card">
					<div class="uppercase title light large box-small">{{ item.id < 10 ? '0' + item.id : item.id }}</div>
					<div class="text bold black box-small">{{ item.title }}</div>
					<div class="text-small black">{{ item.text }}</div>
				</div>
			</div>
		</div>

    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    id: '1',
    title: 'Документи по продукту',
    text: 'Бізнес план, звіт з аналізу ринку, маркетинговий план, unit-економіка, список гіпотез, проект MVP'
  },
  {
    id: '2',
    title: 'Зворотній зв’язок від ринку',
    text: 'Проведення дослідження цільової аудиторії дозволить сформувати Product market fit'
  },
  {
    id: '3',
    title: 'Просування продукту',
    text: 'Просування продукту через аналітичні системи партнерів'
  },
  {
    id: '4',
    title: 'Підписка на звіти',
    text: 'Підписка на аналітичні звіти по міжнародних ринках високотехнологічних сфер'
  },
  {
    id: '5',
    title: 'Підписка на звіти',
    text: 'Підписка на аналітичні звіти по міжнародних ринках високотехнологічних сфер'
  },
  {
    id: '6',
    title: 'Підписка на звіти',
    text: 'Підписка на аналітичні звіти по міжнародних ринках високотехнологічних сфер'
  }
]
</script>