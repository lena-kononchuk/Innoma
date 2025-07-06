<template>
  <header class="header wrapper flex middle-xs between-xs">
    <a href="#" class="logo"></a>
    <ul class="header__menu start-xs center-xs grow gap">
      <li class="header__item">
        <a class="header__link nowrap" href="#about">Хто ми?</a>
      </li>
      <li class="header__item">
        <a class="header__link nowrap" href="#services">Послуги</a>
      </li>
      <li class="header__item">
        <a class="header__link nowrap" href="#accelerator">Акселератор</a>
      </li>
      <li class="header__item">
        <a class="header__link nowrap" href="#news">Новини</a>
      </li>
    </ul>

		<!-- Login + Burger buttons (right side) -->
		<div class="header__auth">
			<button
				v-if="!isLoggedIn"
				class="button button--secondary"
				type="button"
				@click="showLogin = true"
			>
				Увійти
			</button>

			<span v-else class="white">
      Hello {{ userName }}
    </span>

		<button class="burger hide-sm show-xs" @click="toggleMenu">
			<span></span>
			<span></span>
			<span></span>
		</button>
    <MobileMenu :isOpen="isMenuOpen" @close="isMenuOpen = false" />


		</div>

    <teleport to="body">
      <transition name="modal">
        <div v-if="showLogin" class="modal-mask" @click.self="showLogin = false">
          <div class="modal-wrapper">
            <div class="modal-container" @click.stop>
              <div class="modal-header flex between-xs">
                <div><h3>Вхід</h3></div>
                <div class="pointer" @click="loading || closeLogin()">
                  <i class="fas fa-times"></i>
                </div>
              </div>

              <div class="modal-body">
                <form @submit.prevent="login">
									<div class="box-smaller">
                    <input
                      class="input"
                      type="text"
                      placeholder="Ім'я *"
                      v-model="loginName"
                      @input="validateForm"
                      required
                    />
                  </div>
                  <div class="box-smaller">
                    <input
                      class="input"
                      id="login-email"
                      type="email"
                      placeholder="Пошта *"
                      v-model="loginEmail"
                      @input="validateForm"
                      required
                    />
                  </div>

                  <div class="box-smaller">
                    <input
                      class="input"
                      id="login-password"
                      type="password"
                      placeholder="Пароль *"
                      v-model="loginPassword"
                      @input="validateForm"
                      required
                      minlength="6"
                    />
                  </div>
                  <div class="center-xs box-smaller">
                    <button
										v-if="!isLoggedIn"
                      type="submit"
                      class="button button--primary button--full"
                      :disabled="!formValid || loadingLogin"
											
                    >
										{{ loadingLogin ? "Зачекайте..." : "Увійти" }}
                    </button>
										
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>

  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MobileMenu from '../components/MobileMenu.vue';
import gsap from 'gsap'


const isMenuOpen = ref(false);
const showLogin = ref(false);
const loginEmail = ref("");
const loginPassword = ref("");
const loadingLogin = ref(false);
const formValid = ref(false);
const loginName = ref("");

const userName = ref('');
const isLoggedIn = ref(false);

const login = () => {
  if (!formValid.value) return;
  loadingLogin.value = true;
  setTimeout(() => {
    loadingLogin.value = false;
    showLogin.value = false;
    userName.value = loginName.value;
    isLoggedIn.value = true;
  }, 1500);
};




const closeLogin = () => {
  if (!loadingLogin.value) showLogin.value = false;
};

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  formValid.value =
    loginName.value.trim().length > 0 &&
    emailRegex.test(loginEmail.value) &&
    loginPassword.value.length >= 4;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  const scrollToBtn = event.target.closest("[data-scroll-to]");

  let targetId = null;

  if (anchor) {
    targetId = anchor.getAttribute("href")?.slice(1);
  } else if (scrollToBtn) {
    targetId = scrollToBtn.getAttribute("data-scroll-to");
  }

  if (!targetId) return;

  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  event.preventDefault();
  targetEl.scrollIntoView({ behavior: "smooth" });

  gsap.fromTo(targetEl, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });

  const rows = targetEl.querySelectorAll(".row, .row-reverse");
  rows.forEach((row) => {
    row.setAttribute("data-anchor-activated", "true");

    const bounds = row.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      gsap.fromTo(row, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
    } else {
      const animateOnScroll = () => {
        const updated = row.getBoundingClientRect();
        if (updated.top < window.innerHeight && updated.bottom > 0) {
          gsap.fromTo(row, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 });
          window.removeEventListener("scroll", animateOnScroll);
        }
      };
      window.addEventListener("scroll", animateOnScroll);
    }
  });
});

const onKeyDown = (e) => {
  if (e.key === "Escape" && showLogin.value && !loadingLogin.value) {
    closeLogin();
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeyDown);
});
</script>
