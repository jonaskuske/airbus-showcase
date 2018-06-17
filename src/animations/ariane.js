import { TweenMax, T } from 'gsap'
import lottie from 'lottie-web'
import ScrollMagic from 'scrollmagic'
import animations from '../assets/animationdata'
import controller from '../main'

export default () => {
  const anim = lottie.loadAnimation({
    container: document.querySelector('#ariane'),
    animationData: animations.ariane,
    autoplay: false,
  })
  anim.setSpeed(3)
  const animIn = () => {
    anim.setDirection(1)
    anim.play()
  }
  const animOut = () => {
    anim.setDirection(-1)
    anim.play()
  }
  const darken = TweenMax.to(document.body, 1, { backgroundColor: '#0e193d' })
  const show = TweenMax.to('#ariane', 1, { x: 0, y: 0 })
  const hide = TweenMax.to('#ariane', 1, {
    x: window.innerWidth * 0.8,
    y: window.innerHeight * -1.5,
  })
  const showText = TweenMax.to('.tag-ariane', 1, { x: 0 })
  const hideText = TweenMax.to('.tag-ariane', 1, { x: '-100%' })
  new ScrollMagic.Scene({
    triggerElement: '.trigger-ariane-in',
    triggerHook: 'onCenter',
  })
    .setTween(showText)
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-ariane-in',
    triggerHook: 'onEnter',
  })
    .setTween(show)
    .on('end', e => {
      e.scrollDirection === 'FORWARD' && animIn()
      e.scrollDirection === 'REVERSE' && animOut()
    })
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-ariane-in',
    triggerHook: 'onEnter',
  })
    .setTween(darken)
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-ariane-out',
    triggerHook: 'onCenter',
  })
    .setTween(hide)
    .on('start', e => {
      e.scrollDirection === 'FORWARD' && animOut()
      e.scrollDirection === 'REVERSE' && animIn()
    })
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-ariane-out',
    triggerHook: 'onEnter',
  })
    .setTween(hideText)
    .addTo(controller)
}
