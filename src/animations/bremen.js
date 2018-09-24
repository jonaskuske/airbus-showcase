import { TimelineMax, TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller from '../main'

const IN = 0
const TEXT_IN = 1
const TEXT_OUT = 2

export default () => {
  const timeline = new TimelineMax()

  timeline.set('.bremen-area__image', { opacity: 0 })

  timeline
    .to(document.body, 1, { backgroundColor: '#171028' }, IN)
    .to('.bremen-area__image', 1, { opacity: 1 }, IN)
    .fromTo('.text-bremen', 1, { x: '-101%' }, { x: '0%' }, IN)
    .to('.text-bremen .text', 1, { opacity: 1 }, TEXT_IN)
    // ! Neccessary so text is already visible when opening airbus.com/#bremen
    .to('.text-bremen .text', 0.5, { opacity: 1, delay: 1 }, TEXT_OUT)

  let cached = 0
  const getDuration = () => cached
  const updateDuration = () => (cached = window.innerHeight)
  window.addEventListener('resize', updateDuration)
  updateDuration()

  new ScrollMagic.Scene({
    triggerElement: '#bremen',
    triggerHook: 'onEnter',
    duration: getDuration,
  })
    .setTween(timeline)
    .addTo(controller)
}
