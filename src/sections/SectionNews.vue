<template>
  <section class="section" v-scroll-animate id="news">
    <div class="wrapper">
      <div class="h3 box2x blue">Захід та події</div>

      <div class="row">
				<div class="col-xs-12 col-sm-4" v-for="(item, i) in news" :key="i">
				<div class="shadow flex-vertical grow" style="gap: 0;">
					<div class="background background__smaller" :style="{ backgroundImage: `url(${item.image})` }"></div>
					<div class="card flex-vertical grow">
						<div class="flex">
							<i class="far fa-bookmark"></i>
							<span class="category">{{ item.category }}</span>
						</div>
						<div class="text bold black">{{ item.title }}</div>
						<div class="text-small black grow" v-html="item.description"></div>
						<div class="text-smaller">{{ item.date }}</div>
					</div>
				</div>
			</div>

      </div>
    </div>
  </section>
</template>

<script setup>
const news = [
  {
    image: '/images/news/news1.png',
    category: '',
    title: 'Новий звіт по MENA',
    description: `Аналітичний звіт по ринках<br>Близького Сходу (інвестори,<br>обсяг раундів, ТОП сфери)`,
    date: '22.11.2022'
  },
  {
    image: '/images/news/news2.png',
    category: '',
    title: 'Вебінар по особливостях ринків Близького Сходу',
    description: `Поговоримо з експертами ринків<br>у форматі дискусії`,
    date: '22.11.2022'
  },
  {
    image: '/images/news/news3.png',
    category: '',
    title: 'Вебінар по особливостях ринків Близького Сходу',
    description: `Поговоримо з експертами ринків<br>у форматі дискусії`,
    date: '22.11.2022'
  }
]
</script>
