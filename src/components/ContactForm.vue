<template>
	<section class="section blue-bg background" :style="{ backgroundImage: 'url(/images/partner.jpg)' }">
		<div class="wrapper">
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<div class="flex-center">
						<div>
							<div class="h3 white">Залишилися запитання?</div>
							<div class="text box2x white">
								Залиште заявку, і наша команда зв’яжеться з вами
							</div>
							<div class="box2x text bold white">
								Або напишіть нам:</div>
							<div>
								<div class="social-icons flex gap">
									<a class="telegram" target="_blank" title="Telegram" href="https://t.me/your_username">
										<i class="fab fa-telegram-plane"></i>
										<span>Telegram</span>
									</a>
									<a class="whatsapp" target="_blank" title="WhatsApp" href="https://wa.me/your_number">
										<i class="fab fa-whatsapp"></i>
										<span>WhatsApp</span>
									</a>
								</div>


							</div>
						</div>
					</div>
				</div>

				<div class="col-xs-12 col-sm-6">
					<div v-if="isSubmitted" class="text bold white center-xs middle-xs">
						Дякуємо за вашу заявку!<br>
						Наша команда зв'яжеться з вами найближчим часом.
					</div>
					<form @submit.prevent="submitForm" v-else class="card flex-vertical">
						<input class="input" v-model="formFields.name" :disabled="isLoading || isSubmitted" placeholder="Ім'я *"
							:class="{ invalid: !isNameValid && formFields.name !== '' }" required />
						<input class="input"  v-model="formFields.phone" :disabled="isLoading || isSubmitted" placeholder="Телефон *"
							:class="{ invalid: !isPhoneValid && formFields.phone !== '' }" required type="tel" />
						<input class="input" v-model="formFields.email" :disabled="isLoading || isSubmitted" placeholder="Пошта *"
							:class="{ invalid: !isEmailValid && formFields.email !== '' }" required type="email" />

						<button type="submit" :disabled="!isFormValid || isLoading || isSubmitted" class="button button--primary">
							<span v-if="isLoading">Надсилання...</span>
							<span v-else-if="isSubmitted">Відправлено</span>
							<span v-else>Залишити заявку</span>
						</button>
					</form>

				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'

const formFields = reactive({
	name: '',
	phone: '',
	email: ''
})

const isLoading = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const isNameValid = computed(() => formFields.name.trim().length >= 2)
const isPhoneValid = computed(() => /^\+?\d{7,15}$/.test(formFields.phone))
const isEmailValid = computed(() => /^\S+@\S+\.\S+$/.test(formFields.email))

const isFormValid = computed(() =>
	isNameValid.value &&
	isPhoneValid.value &&
	isEmailValid.value
)

function fakeSubmit() {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000)
	})
}

async function submitForm() {
  if (!isFormValid.value) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    await fakeSubmit()
    isSubmitted.value = true
    console.log('Submitted:', isSubmitted.value)
  } catch {
    errorMessage.value = 'Сталася помилка'
  } finally {
    isLoading.value = false
  }
}
</script>
