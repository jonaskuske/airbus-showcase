import { TimelineMax, TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller from '../main'

export default () => {
  const timeline = new TimelineMax()

  timeline
    .to('.welcome-area', 0.5, { opacity: 0 }, 0)
    .fromTo('.header__nav', 0.7, { color: '#00205b' }, { color: '#ffffff' }, 0)

  let cached = 0
  const getDuration = () => cached
  const updateDuration = () => (cached = window.innerHeight)
  window.addEventListener('resize', updateDuration)
  updateDuration()

  new ScrollMagic.Scene({
    triggerElement: '#welcome',
    triggerHook: 'onLeave',
    duration: getDuration,
  })
    .setTween(timeline)
    .addTo(controller)
}
