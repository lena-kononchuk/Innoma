<template>
  <div class="container-full">
    <div class="layout__content">
		<SectionHeader />
		<SectionHero />
		<ServicesSection />
		<TargetAudienceSection />
		<SectionMarkets bgImage="/images/background/markets.jpg">
			<template #title>Навчіться досліджувати іноземні ринки і відкрийте нові можливості для свого бізнесу</template>
			<template #text>Наша команда допоможе вам вивчити ринки Близького Сходу, Азії, Латинської Америки та Африки</template>
			<template #button>
				<button class="button button--primary" type="button">Отримати консультацію</button>
			</template>
		</SectionMarkets>
		<SectionRegion />
		<SectionAcceleratorIntro />
		<SectionAcceleratorProgram />
		<SectionPartners />
		<SectionBenefits />
		<SectionPrice />
		<SectionAbout />
		<Slider />
		<SectionPartnersLogo />
		<SectionMarkets bgImage="/images/background/partners.jpg">
		<template #title>
			Створюємо міжнародну спільноту експертів та партнерів
		</template>
		<template #text>
			Якщо ви або ваш бізнес може бути корисним IT-командам при виході на міжнародні ринки, запрошуємо вас стати нашим партнером
		</template>
		<template #button>
			<button class="button button--primary" type="button">Стати партнером</button>
		</template>
		</SectionMarkets>
		<SectionNews />
		<ContactForm />
    </div>
		<SectionFooter />
  </div>
</template>

<script setup>

import SectionFooter from './sections/SectionFooter.vue'
import SectionHeader from './sections/SectionHeader.vue'
import SectionHero from './sections/SectionHero.vue'
import ServicesSection from './sections/ServicesSection.vue'
import TargetAudienceSection from './sections/TargetAudienceSection.vue'
import SectionRegion from './sections/SectionRegion.vue'
import SectionAcceleratorIntro from './sections/SectionAcceleratorIntro.vue'
import SectionAcceleratorProgram from './sections/SectionAcceleratorProgram.vue'
import SectionPartners from './sections/SectionPartners.vue'
import SectionBenefits from './sections/SectionBenefits.vue'
import SectionPrice from './sections/SectionPrice.vue'
import SectionAbout from './sections/SectionAbout.vue'
import SectionPartnersLogo from './sections/SectionPartnersLogo.vue'
import SectionMarkets from './sections/SectionMarkets.vue'
import Slider from './components/Slider.vue'
import ContactForm from './components/ContactForm.vue'
import SectionNews from './sections/SectionNews.vue'

</script>
