import './assets/styles/style.css'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import animations from './animations'

document.querySelector('.header__privacy').addEventListener('click', e => {
  e.preventDefault()
  alert(`
  Falls Sie die im Impressum genannten Kontaktdaten zur Kontaktaufnahme nutzen, verwenden wir Ihre so erhaltenen Daten ausschließlich zur Beantwortung Ihrer Anfrage; auf Wunsch löschen wir die Daten.
  Ansonsten verwendet und verarbeitet diese Seite keine privaten Daten.
  `)
})

export default new ScrollMagic.Controller({
  container: document.body,
  globalSceneOptions: {
    duration: '100%',
  },
})

animations.loadAll()
