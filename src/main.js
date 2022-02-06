import 'promise-polyfill/src/polyfill'
import 'whatwg-fetch'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollMagic from 'scrollmagic'
import './globals'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import animations from './animations'
import './registerServiceWorker'

smoothscroll.polyfill()

// Handler so a click on the logo smoothscrolls to the top
document.querySelector('#header-logo').addEventListener('click', e => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

let cached = 0
const getDuration = () => cached
const updateDuration = () => (cached = window.innerHeight * 2)
window.addEventListener('resize', updateDuration)
updateDuration()

export default new ScrollMagic.Controller({
  container: document.body,
  globalSceneOptions: {
    duration: getDuration,
  },
})

let isMobile = false
const mediaQuery = window.matchMedia('(max-width: 560px)')
const handleQuery = q => (isMobile = q.matches)
handleQuery(mediaQuery)
mediaQuery.addListener(handleQuery)
export { isMobile }

// Wait until all animations are loaded, then remove the "loading" notice,
// show the animated scroll hint and allow scrolling by allowing overflow
animations.loadAll().then(() => {
  const info = document.querySelector('.js-subtitle')
  info.style.opacity = 0
  info.setAttribute('aria-hidden', true)

  document.querySelector('.scroll-downs').classList.remove('hide')
  document.body.classList.remove('no-overflow')
})
