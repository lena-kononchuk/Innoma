<template>
  <section class="section">
	<div class="wrapper">
		<div class="h3 uppercase box3x blue">Географія нашої діяльності</div>
    <ul class="tabs flex center-xs middle-xs box2x">
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: currentTab === tab }"
        @click="currentTab = tab"
      >
        {{ tab }}
      </li>
    </ul>

		<div class="row">
		  <div class="col-xs-12 col-sm-3">
				<div class="box h5 black">Чим цікавий <br> <span class="green">ринок MENA</span></div>
						<div class="black box">ОАЭ, Саудовская Аравия, 
					Израиль, Оман, Бахрейн, Катар, 
					Тунис, Йемен, Египет, Алжир</div>
					<button class="button button--primary box" type="button">Вихід на ринок</button>
						<div class="flex middle-xs">
						<img src="/images/avatar/experts3.png" alt="Менеджер Фатіма" class="avatar avatar--small" />
						<div class="">
							<div class="text-small black bold">Фатіма</div>
							<div class="text-smaller black">Менеджер по ринку MENA</div>
						</div>
					</div>
				</div>
			<div class="col-xs-12 col-sm-8 offset-1"></div>
		</div>


    <div class="tab-content" v-if="currentTab === 'Близький Схід (MENA)'">
      <h3>💡 Чому MENA?</h3>
      <ul>
        <li><strong>Населення:</strong> понад 5,5 млрд осіб</li>
        <li><strong>Акселератори та інкубатори:</strong> понад 300</li>
        <li><strong>Ключові країни:</strong> ОАЕ, Саудівська Аравія, Ізраїль, Оман, Бахрейн, Катар, Туніс, Ємен, Єгипет, Алжир</li>
        <li><strong>Стадії інвестицій:</strong> pre-seed, seed</li>
        <li><strong>Венчурні фонди:</strong> 73</li>
        <li><strong>Менеджер:</strong> Фатіма</li>
        <li><a href="#" class="download-link">📥 Завантажити звіт по MENA</a></li>
      </ul>
    </div>

    <div class="tab-content" v-else-if="currentTab === 'Азія'">
      <p>Контент про ринок Азії (можемо доповнити разом).</p>
    </div>

    <div class="tab-content" v-else-if="currentTab === 'Латинська Америка'">
      <p>Контент про ринок Латинської Америки (готовий допомогти заповнити).</p>
    </div>

    <div class="tab-content" v-else-if="currentTab === 'Африка'">
      <p>Контент про ринок Африки (можемо сформулювати під твій запит).</p>
    </div>
		
	</div>

  </section>
</template>

<script>
export default {
  name: 'MarketsTabs',
  data() {
    return {
      tabs: ['Близький Схід', 'Азія', 'Латинська Америка', 'Африка'],
      currentTab: 'Близький Схід'
    };
  }
};
</script>

<style scoped>
.tabs {
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 1rem;
  width: 100%;
}

.tabs li {
  flex: 1;
  text-align: center;
  padding: 0.75rem 1rem;
  background: #eee;
  border-radius: 5px;
  transition: background 0.3s;
  cursor: pointer;
}

.tabs li.active {
  background: #007BFF;
  color: white;
}
.tab-content {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;

	background-image: url('@/assets/map.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1.5rem;
  border-radius: 8px;
  color: #fff; 


}
.download-link {
  color: #007BFF;
  text-decoration: none;
}


</style>
