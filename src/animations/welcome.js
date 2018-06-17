import { TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller from '../main'

export default () => {
  const out = TweenMax.to('#welcome', 1, { opacity: 0 })
  const airbusColor = TweenMax.to('.logo', 1, { fill: '#ffffff' })
  const bodyColor = TweenMax.to(document.body, 1, { color: '#ffffff' })
  new ScrollMagic.Scene({
    triggerElement: '.trigger-welcome',
    triggerHook: 'onLeave',
  })
    .setTween(out)
    .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '.trigger-welcome',
    triggerHook: 'onLeave',
  })
    .setTween(airbusColor)
    .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '.trigger-welcome',
    triggerHook: 'onLeave',
  })
    .setTween(bodyColor)
    .addTo(controller)
}
