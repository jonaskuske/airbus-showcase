import './assets/styles'
import 'promise-polyfill/src/polyfill'
import 'whatwg-fetch'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import animations from './animations'

smoothscroll.polyfill()

document.querySelector('#header-logo').addEventListener('click', e => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

document.querySelector('.header__privacy').addEventListener('click', e => {
  e.preventDefault()
  alert(`
  Falls Sie die im Impressum genannten Kontaktdaten zur Kontaktaufnahme nutzen, verwenden wir Ihre so erhaltenen Daten ausschließlich zur Beantwortung Ihrer Anfrage; auf Wunsch löschen wir die Daten.
  Ansonsten verwendet und verarbeitet diese Seite keine privaten Daten.
  `)
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

animations.loadAll().then(() => {
  const info = document.querySelector('.js-subtitle')
  info.textContent = info.dataset.done
  document.querySelector('.scroll-downs').classList.remove('hide')
  document.body.classList.remove('no-overflow')
})
