<template>
  <div class="container-full">
    <div class="layout__content">

      <SectionHeader />
      <SectionHero />

      <div ref="servicesTrigger"></div>
      <ServicesSection v-if="showServices" />

      <div ref="targetAudienceTrigger"></div>
      <TargetAudienceSection v-if="showTargetAudience" />

      <div ref="sectionMarkets1Trigger"></div>
      <SectionMarkets v-if="showSectionMarkets1" bgImage="./images/background/markets.jpg">
        <template #title>Навчіться досліджувати іноземні ринки і відкрийте нові можливості для свого бізнесу</template>
        <template #text>Наша команда допоможе вам вивчити ринки Близького Сходу, Азії, Латинської Америки та Африки</template>
        <template #button>
          <button class="button button--primary" type="button" data-scroll-to="contact">Отримати консультацію</button>
        </template>
      </SectionMarkets>

      <div ref="sectionRegionTrigger"></div>
      <SectionRegion v-if="showSectionRegion" />

      <div ref="acceleratorIntroTrigger"></div>
      <SectionAcceleratorIntro v-if="showAcceleratorIntro" />

      <div ref="acceleratorProgramTrigger"></div>
      <SectionAcceleratorProgram v-if="showAcceleratorProgram" />

      <div ref="partnersTrigger"></div>
      <SectionPartners v-if="showPartners" />

      <div ref="benefitsTrigger"></div>
      <SectionBenefits v-if="showBenefits" />

      <div ref="priceTrigger"></div>
      <SectionPrice v-if="showPrice" />

      <div ref="aboutTrigger"></div>
      <SectionAbout v-if="showAbout" />

      <div ref="sliderTrigger"></div>
      <Slider v-if="showSlider" />

      <div ref="partnersLogoTrigger"></div>
      <SectionPartnersLogo v-if="showPartnersLogo" />

      <div ref="sectionMarkets2Trigger"></div>
      <SectionMarkets v-if="showSectionMarkets2" bgImage="./images/background/partners.jpg">
        <template #title>Створюємо міжнародну спільноту експертів та партнерів</template>
        <template #text>Якщо ви або ваш бізнес може бути корисним IT-командам при виході на міжнародні ринки, запрошуємо вас стати нашим партнером</template>
        <template #button>
          <button class="button button--primary" type="button" data-scroll-to="contact">Стати партнером</button>
        </template>
      </SectionMarkets>

      <div ref="newsTrigger"></div>
      <SectionNews v-if="showNews" />

      <div ref="contactFormTrigger"></div>
      <ContactForm v-if="showContactForm" />

    </div>
    <SectionFooter  />

  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'

import SectionHeader from './sections/SectionHeader.vue'
import SectionHero from './sections/SectionHero.vue'

const ServicesSection = defineAsyncComponent(() => import('./sections/ServicesSection.vue'))
const TargetAudienceSection = defineAsyncComponent(() => import('./sections/TargetAudienceSection.vue'))
const SectionRegion = defineAsyncComponent(() => import('./sections/SectionRegion.vue'))
const SectionAcceleratorIntro = defineAsyncComponent(() => import('./sections/SectionAcceleratorIntro.vue'))
const SectionAcceleratorProgram = defineAsyncComponent(() => import('./sections/SectionAcceleratorProgram.vue'))
const SectionPartners = defineAsyncComponent(() => import('./sections/SectionPartners.vue'))
const SectionBenefits = defineAsyncComponent(() => import('./sections/SectionBenefits.vue'))
const SectionPrice = defineAsyncComponent(() => import('./sections/SectionPrice.vue'))
const SectionAbout = defineAsyncComponent(() => import('./sections/SectionAbout.vue'))
const SectionPartnersLogo = defineAsyncComponent(() => import('./sections/SectionPartnersLogo.vue'))
const SectionMarkets = defineAsyncComponent(() => import('./sections/SectionMarkets.vue'))
const Slider = defineAsyncComponent(() => import('./components/Slider.vue'))
const ContactForm = defineAsyncComponent(() => import('./components/ContactForm.vue'))
const SectionNews = defineAsyncComponent(() => import('./sections/SectionNews.vue'))
const SectionFooter = defineAsyncComponent(() => import('./sections/SectionFooter.vue'))


// show flags
const showServices = ref(false)
const showTargetAudience = ref(false)
const showSectionMarkets1 = ref(false)
const showSectionRegion = ref(false)
const showAcceleratorIntro = ref(false)
const showAcceleratorProgram = ref(false)
const showPartners = ref(false)
const showBenefits = ref(false)
const showPrice = ref(false)
const showAbout = ref(false)
const showSlider = ref(false)
const showPartnersLogo = ref(false)
const showSectionMarkets2 = ref(false)
const showNews = ref(false)
const showContactForm = ref(false)
const showFooter = ref(false)

// refs for triggers
const servicesTrigger = ref(null)
const targetAudienceTrigger = ref(null)
const sectionMarkets1Trigger = ref(null)
const sectionRegionTrigger = ref(null)
const acceleratorIntroTrigger = ref(null)
const acceleratorProgramTrigger = ref(null)
const partnersTrigger = ref(null)
const benefitsTrigger = ref(null)
const priceTrigger = ref(null)
const aboutTrigger = ref(null)
const sliderTrigger = ref(null)
const partnersLogoTrigger = ref(null)
const sectionMarkets2Trigger = ref(null)
const newsTrigger = ref(null)
const contactFormTrigger = ref(null)
const footerTrigger = ref(null)



onMounted(() => {
  const createObserver = (triggerRef, showFlag) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            showFlag.value = true
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px' }
    )
    if (triggerRef.value) observer.observe(triggerRef.value)
  }

  createObserver(servicesTrigger, showServices)
  createObserver(targetAudienceTrigger, showTargetAudience)
  createObserver(sectionMarkets1Trigger, showSectionMarkets1)
  createObserver(sectionRegionTrigger, showSectionRegion)
  createObserver(acceleratorIntroTrigger, showAcceleratorIntro)
  createObserver(acceleratorProgramTrigger, showAcceleratorProgram)
  createObserver(partnersTrigger, showPartners)
  createObserver(benefitsTrigger, showBenefits)
  createObserver(priceTrigger, showPrice)
  createObserver(aboutTrigger, showAbout)
  createObserver(sliderTrigger, showSlider)
  createObserver(partnersLogoTrigger, showPartnersLogo)
  createObserver(sectionMarkets2Trigger, showSectionMarkets2)
  createObserver(newsTrigger, showNews)
  createObserver(contactFormTrigger, showContactForm)
})
</script>
