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
			if (!el.contains(event.target)) return // prevent cross-section clicks
		
			const anchor = event.target.closest('a[href^="#"]')
			const btn = event.target.closest('[data-scroll-to]')
			
			let targetId = null
			
			if (anchor) {
				targetId = anchor.getAttribute('href')?.slice(1)
			} else if (btn) {
				targetId = btn.dataset.scrollTo
			}
		
			if (!targetId) return
		
			const targetEl = document.getElementById(targetId)
			if (!targetEl) return
		
			event.preventDefault()
		
			targetEl.scrollIntoView({ behavior: 'smooth' })
		
			gsap.fromTo(targetEl, { opacity: 0, y: 40 }, {
				opacity: 1, y: 0, duration: 1, ease: 'power2.out'
			})
		
			const targetRows = targetEl.querySelectorAll('.row, .row-reverse')
			targetRows.forEach(row => {
				row.setAttribute('data-anchor-activated', 'true')
		
				ScrollTrigger.getAll()
					.filter(t => t.trigger === row)
					.forEach(trigger => trigger.kill())
		
				const bounds = row.getBoundingClientRect()
				if (bounds.top < window.innerHeight && bounds.bottom > 0) {
					gsap.fromTo(row, { opacity: 0, y: 40 }, {
						opacity: 1, y: 0, duration: 1, ease: 'power2.out'
					})
				} else {
					const animateOnScroll = () => {
						const updated = row.getBoundingClientRect()
						if (updated.top < window.innerHeight && updated.bottom > 0) {
							gsap.fromTo(row, { opacity: 0, y: 40 }, {
								opacity: 1, y: 0, duration: 1, ease: 'power2.out'
							})
							window.removeEventListener('scroll', animateOnScroll)
						}
					}
					window.addEventListener('scroll', animateOnScroll)
				}
			})
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
