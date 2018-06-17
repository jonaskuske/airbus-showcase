import { TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller from '../main'

export default () => {
  const out = TweenMax.to('#welcome', 1, { opacity: 0 })

  new ScrollMagic.Scene({
    triggerElement: '.trigger-welcome',
    triggerHook: 'onLeave',
  })
    .setTween(out)
    .addTo(controller)
}
