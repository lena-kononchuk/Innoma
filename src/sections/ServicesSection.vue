<template>
  <div class="section" v-scroll-animate  id="services" >
    <div class="wrapper">
      <div class="animated-group center-xs start-md">
        <div class="h3  box2x blue">Наші послуги</div>

        <div class="row box2x">
          <div class="col-xs-12 col-sm-12 col-md-7 col-text">
            <div class="text middle-sm">
              <div class="content box">
                <div class="blue box">Аналітичні дослідження</div>
                <div class="black text box">
                  Одним із наших ключових напрямків є аналіз технологічних трендів на міжнародних ринках.
                  Ми проводимо аналіз на основі публічних досліджень McKinsey, BCG, PWC, Deloitte, Accenture, BCG, EY, Crunchbase, Dealroom, F6S, PitchBook, а також агрегуємо та аналізуємо дані з відкритих міжнародних джерел: патенти, медіа, наукові публікації.
                  Онлайн-програма акселерації дозволить вашій команді вийти на глобальні ринки.
                  Ви зможете презентувати проєкт міжнародним інвесторам і партнерам.
                </div>
                <button class="button button--primary" type="button" data-scroll-to="geo-section">Дізнатись більше</button>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5 col-image">
            <div class="image image--middle" :style="{ backgroundImage: 'url(./images/services.png)' }"></div>
          </div>
        </div>

        <div class="row row-reverse">
          <div class="col-xs-12  col-md-5 box-smaller">
            <div class="image image--middle" :style="{ backgroundImage: 'url(./images/accelerator.png)' }"></div>
          </div>
          <div class="col-xs-12  col-sm-12 col-md-7">
            <div class="text middle-sm">
              <div class="content box">
                <div class="blue box">Онлайн акселератор для IT-бізнесу</div>
                <div class="black text box">
                  Онлайн програма акселерації IT-бізнесу дозволить вашій команді відкрити нові горизонти та можливості для бізнесу на глобальних ринках. В результаті програми ви отримаєте можливість презентувати свій проєкт міжнародним інвесторам та локальним партнерам.
                </div>
                <button class="button button--primary" type="button" data-scroll-to="accelerator">Дізнатись більше</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, nextTick, inject } from 'vue'
import gsap from 'gsap'

</script>
