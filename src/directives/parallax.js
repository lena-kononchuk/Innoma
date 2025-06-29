export default {
  mounted(el, binding) {
    const speed = binding.value || 0.3;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const offsetTop = rect.top + scrollTop;

      let translateY = (scrollTop - offsetTop) * speed;
      translateY = Math.max(-200, Math.min(200, translateY));

      el.style.backgroundPosition = `center ${translateY}px`;
    };

    el._handleScroll = handleScroll;
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  },

  unmounted(el) {
    window.removeEventListener('scroll', el._handleScroll);
    delete el._handleScroll;
  },
};
