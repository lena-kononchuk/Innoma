<template>
  <section class="section center-xs start-md" v-scroll-animate>
    <div class="wrapper">
			<div class="h3  box2x blue">Для кого ми?</div>
			<div class="row center-xs">
			<div class="col-xs-10 col-sm-6 col-md-4 margin-bottom" v-for="item in cards" :key="item.id">
				<div class="card">
					<div class="uppercase title light large">{{ item.id < 10 ? '0' + item.id : item.id }}</div>
					<div class="subtitle black box-smaller">{{ item.title }}</div>
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
    id: 1,
    title: 'IT-проєкти на стадії ідеї',
    text: 'Для стартапів, які планують залучити міжнародні інвестиції, протестувати попит і запустити продукт',
  },
  {
    id: 2,
    title: 'Інноваційний бізнес',
    text: 'Для вже працюючого технологічного бізнесу, допоможемо знайти нові міжнародні ринки збуту, масштабувати бізнес',
  },
  {
    id: 3,
    title: 'Корпорації',
    text: 'Для вже працюючого технологічного бізнесу, допоможемо знайти нові міжнародні ринки збуту, масштабувати бізнес',
  },
]
</script>
