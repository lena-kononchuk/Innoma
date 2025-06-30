<template>
  <section class="section">
    <div class="wrapper">
      <div class="h3 box-small blue">Наші партнери</div>
      <div class="row">
        <div class="col-xs-3 col-sm-3" v-for="(pair, i) in logoPairs" :key="i">
          <div class="card__partners" v-for="logo in pair" :key="logo">
            <img :src="`/images/partners/${logo}`" :alt="logo" class="image image__partners" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const logos = [
  'logo.png', 'logo2.png',
  'logo3.png', 'logo4.png',
  'logo5.png', 'logo6.png',
  'logo7.png', 'logo8.png',
]

const logoPairs = []
for (let i = 0; i < logos.length; i += 2) {
  logoPairs.push(logos.slice(i, i + 2))
}
</script>
