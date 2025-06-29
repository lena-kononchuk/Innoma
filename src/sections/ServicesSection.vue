<template>
  <div class="section">
    <div class="wrapper">
      <div class="animated-group">
        <div class="h3 uppercase box3x blue">Наші послуги</div>

        <div class="row box3x">
          <div class="col-xs-12 col-sm-7">
            <div class="text middle-sm">
              <div class="content box">
                <div class="blue box">Аналітичні дослідження</div>
                <div class="black text box">
                  Одним із наших ключових напрямків є аналіз технологічних трендів на міжнародних ринках.
                  Ми проводимо аналіз на основі публічних досліджень McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S, PitchBook, а також агрегуємо та аналізуємо дані з відкритих міжнародних джерел: патенти, медіа, наукові публікації.
                  Онлайн-програма акселерації дозволить вашій команді вийти на глобальні ринки.
                  Ви зможете презентувати проєкт міжнародним інвесторам і партнерам.
                </div>
                <button class="button button--primary" type="button">Дізнатись більше</button>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5">
            <div class="image image--middle" :style="{ backgroundImage: 'url(/images/services.png)' }"></div>
          </div>
        </div>

        <div class="row row-reverse">
          <div class="col-xs-12 col-sm-5">
            <div class="image image--middle" :style="{ backgroundImage: 'url(/images/accelerator.png)' }"></div>
          </div>
          <div class="col-xs-12 col-sm-7">
            <div class="text middle-sm">
              <div class="content box">
                <div class="blue box">Онлайн акселератор для IT-бізнесу</div>
                <div class="black text box">
                  Онлайн програма акселерації IT-бізнесу дозволить вашій команді відкрити нові горизонти та можливості для бізнесу на глобальних ринках. В результаті програми ви отримаєте можливість презентувати свій проєкт міжнародним інвесторам та локальним партнерам.
                </div>
                <button class="button button--primary" type="button">Дізнатись більше</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(async () => {
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)

  const rows = document.querySelectorAll('.row, .row-reverse')
  rows.forEach(row => {
    gsap.fromTo(
      row,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })
})
</script>
