<template>
  <section class="section" v-scroll-animate id="price">
    <div class="wrapper">
      <div class="h3 box2x blue">Вартість</div>
      <div class="row center-xs">
        <div
          class="col-xs-10 col-sm-4"
          v-for="(item, index) in cards"
          :key="index"
        >
          <div class="card flex-vertical">
            <div class="card__icon--large">
              <img :src="item.icon" alt="icon" class="icon" />
              <!-- <span>{{ index + 1 }}</span> -->
            </div>
						<div class="subtitle bold black" style="white-space: pre-wrap;">
							{{ item.title }}
						</div>            
						<hr class="hr" />
						<div class="text black start-xs grow">
						<div class="bold box-smaller" v-if="item.header">
							{{ item.header }}
						</div>
						<template v-if="Array.isArray(item.content)">
							<div v-for="(line, i) in item.content" :key="i" class="text-small">
								{{ i + 1 }}. {{ line }}
							</div>
						</template>
						<template v-else>
							{{ item.content }}
						</template>
					</div>
					<button class="button button--primary" type="button">Залишити заявку</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: '/images/svg/analysis.svg',
    title: 'Аналіз міжнародних\nринків',
    header: 'Що входить в звіт?',
    content: [
      'Аналіз конкурентів',
      'Аналіз інвесторів',
      'Розміри ринку (TAM, SAM, SOM)',
      'Аналіз ЗМІ',
      'Аналіз запитів в інтернеті',
    ],
    readiness: 'Готовність: 7 роб. днів',
    language: 'рус. / англ.',
    price: '$1 000',
    buttonText: 'Залишити заявку',
  },
  {
    icon: '/images/svg/startup.svg',
    title: 'Упаковка стартапу\nпід локальні ринки',
    header: 'Що входить у послугу?',
    content: [
      'Аналіз локальних ринків',
      'Бізнес-план',
      'Пітч презентація',
      'Фінансовий план',
      'Розрахунок юніт-економіки',
      'Проведення кастдева',
    ],
    readiness: 'Готовність: 7 роб. днів',
    language: 'рус. / англ.',
    price: '$1 000',
    buttonText: 'Залишити заявку',
  },
  {
    icon: '/images/svg/accelerator.svg',
    title: 'Акселератор вашого\nбізнесу',
    header: 'Що входить в акселератор?',
    content: [
      'Онлайн доступ до курсів',
      'Документи для бізнесу',
      'Пітч презентація',
      'Демо день',
      'Просування за результатами',
    ],
    readiness: 'Готовність: 7 роб. днів',
    language: 'рус. / англ.',
    price: '$1 000',
    buttonText: 'Залишити заявку',
  },
]
</script>
