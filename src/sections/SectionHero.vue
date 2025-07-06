<template>
  <section class="background relative background__hero">
    <div class="overlay"></div>
    <div class="wrapper">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8">
          <div class="section animate-fadein relative start-md center-xs" ref="heroText">
            <div class="h1 box">
              Запустіть <br />
              <span class="green-bg">технологічний IT-бізнес </span><br />
              на міжнародних ринках
            </div>
            <div class="box white">Відкрито набір заявок на акселератор</div>
            <button class="button button--primary" type="button" @click="openRegister">
              Подати заявку
            </button>

            <teleport to="body">
              <transition name="modal">
                <div v-if="showRegister" class="modal-mask" @click.self="closeRegister">
                  <div class="modal-wrapper">
                    <div class="modal-container" @click.stop>
                      <div class="modal-header flex between-xs">
                        <div><h3>Реєстрація</h3></div>
												<div @click="loading || closeRegister()" style="cursor:pointer;">
													<i class="fas fa-times"></i>
												</div>

                      </div>

                      <div class="modal-body">
                        <form v-if="!registerSuccess" @submit.prevent="register">
                          <div class="box-smaller">
                            <input
                              id="register-name"
																class="input"
                              type="text"
                              placeholder="Ім'я  *"
                              v-model.trim="registerName"
                              @input="validateForm"
                              required
                            />
                          </div>

                          <div class="box-smaller">
                            <input
                              id="register-email"
															class="input"
                              type="email"
                              placeholder="Пошта  *"
                              v-model.trim="registerEmail"
                              @input="validateForm"
                              required
                            />
                          </div>

                          <div class="box-smaller" >
                            <input
                              id="register-password"
																class="input"
                              type="password"
                              placeholder="Пароль  *"
                              v-model="registerPassword"
                              @input="validateForm"
                              required
                              minlength="6"
                            />
                          </div>
													<div class="center-xs">
														<button
                            type="submit"
                            class="button button--primary button--full"
                            style="margin-top: 1.5rem;"
                            :disabled="!formValid || loading"
                          >
                            {{ loading ? 'Зачекайте...' : 'Зареєструватися' }}
                          </button></div>


                        </form>

                        <div v-else class="success-message">
                          Дякую, наша команда зв’яжеться з вами.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </teleport>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const heroText = ref(null)
const showRegister = ref(false)

const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')

const formValid = ref(false)
const loading = ref(false)
const registerSuccess = ref(false)

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  formValid.value =
    registerName.value.trim().length > 0 &&
    emailRegex.test(registerEmail.value) &&
    registerPassword.value.length >= 6
}

const openRegister = () => {
  showRegister.value = true
  registerSuccess.value = false
  registerName.value = ''
  registerEmail.value = ''
  registerPassword.value = ''
  formValid.value = false
  loading.value = false
}

const closeRegister = () => {
  if (!loading.value) showRegister.value = false
}

const register = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    registerSuccess.value = true
  }, 2000)
}
const onKeyDown = (e) => {
  if (e.key === 'Escape' && showRegister.value && !loading.value) {
    closeRegister()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)

  if (heroText.value) {
    gsap.fromTo(
      heroText.value,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
  }
})


</script>
