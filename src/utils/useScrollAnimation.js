import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  mounted(el) {
    gsap.registerPlugin(ScrollTrigger)

    const animateRows = () => {
      const rows = el.querySelectorAll('.row, .row-reverse')
      rows.forEach(row => {
        //  do not create ScrollTrigger if the row was already shown via anchor
        if (row.getAttribute('data-anchor-activated') === 'true') return

        ScrollTrigger.create({
          trigger: row,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
          onEnter: () => {
            gsap.fromTo(
              row,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
              }
            )
          },
          onLeaveBack: () => {
            // revert to initial state when scrolling back
            gsap.to(row, {
              opacity: 0,
              y: 40,
              duration: 0.5,
              ease: 'power2.in'
            })
          }
        })
      })
    }

    // launch scroll-based animations
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: animateRows
    })

    const handleClick = event => {
      const btn = event.target.closest('[data-scroll-to]')
      if (!btn) return
      const targetId = btn.dataset.scrollTo
      const targetEl = document.getElementById(targetId)

      if (targetEl) {
        event.preventDefault()

        // mark all .row elements inside the target section as anchor-triggered
        const targetRows = targetEl.querySelectorAll('.row, .row-reverse')
        targetRows.forEach(row => {
          row.setAttribute('data-anchor-activated', 'true')

          // 💣 remove existing ScrollTriggers tied to this row
          ScrollTrigger.getAll()
            .filter(t => t.trigger === row)
            .forEach(trigger => trigger.kill())

          //  animate manually
          gsap.fromTo(
            row,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out'
            }
          )
        })

        // scroll and animate the section itself (optional)
        targetEl.scrollIntoView({ behavior: 'smooth' })

        gsap.fromTo(
          targetEl,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out'
          }
        )
      }
    }

    el.addEventListener('click', handleClick)
    el._handleClick = handleClick
  },

  unmounted(el) {
    if (el._handleClick) {
      el.removeEventListener('click', el._handleClick)
      delete el._handleClick
    }

    // remove ScrollTriggers related to this section
    ScrollTrigger.getAll()
      .filter(trigger => trigger.trigger === el)
      .forEach(trigger => trigger.kill())
  }
}
