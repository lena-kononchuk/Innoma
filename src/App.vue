<template>
  <div class="container-full">
    <div class="layout__content">
		<SectionHeader />
		<SectionHero />
		<ServicesSection />
		<TargetAudienceSection />
		<ExploreMarkets />
		<SectionRegion />
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
import ExploreMarkets from './sections/ExploreMarkets.vue'
import SectionRegion from './sections/SectionRegion.vue'
</script>
