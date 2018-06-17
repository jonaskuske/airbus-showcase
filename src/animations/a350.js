import { TweenMax } from 'gsap'
import lottie from 'lottie-web'
import ScrollMagic from 'scrollmagic'
import animations from '../assets/animationdata'
import controller from '../main'

export default () => {
  const anim = lottie.loadAnimation({
    container: document.querySelector('#a350'),
    animationData: animations.a350,
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
  const darken = TweenMax.to(document.body, 1, { backgroundColor: '#172a67' })
  const show = TweenMax.to('#a350', 1, { x: 0, y: 0 })
  const hide = TweenMax.to('#a350', 1, {
    x: window.innerWidth,
    y: window.innerHeight * -0.2,
  })
  const showText = TweenMax.to('.tag-a350', 1, { x: 0 })
  const hideText = TweenMax.to('.tag-a350', 1, { x: '-100%' })
  new ScrollMagic.Scene({
    triggerElement: '.trigger-a350-in',
    triggerHook: 'onCenter',
  }).setTween(showText).addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-a350-in',
    triggerHook: 'onEnter',
  })
    .setTween(show)
    .on('end', e => {
      e.scrollDirection === 'FORWARD' && animIn()
      e.scrollDirection === 'REVERSE' && animOut()
    })
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-a350-in',
    triggerHook: 'onEnter',
  })
    .setTween(darken)
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '.trigger-a350-out',
    triggerHook: 'onEnter',
  })
    .setTween(hide)
    .on('start', e => {
      e.scrollDirection === 'FORWARD' && animOut()
      e.scrollDirection === 'REVERSE' && animIn()
    })
    .addTo(controller)
    new ScrollMagic.Scene({
    triggerElement: '.trigger-a350-out',
    triggerHook: 'onEnter',
  }).setTween(hideText).addTo(controller)
}
