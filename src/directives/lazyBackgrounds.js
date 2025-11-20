export default {
  mounted(el, binding) {
    const url = binding.value || el.dataset.bg

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && url) {
          el.style.backgroundImage = `url('${url}')`
          el.classList.add('lazy-loaded') // optional
          observer.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '0px',
      threshold: 0.1
    })

    observer.observe(el)
  }
}
