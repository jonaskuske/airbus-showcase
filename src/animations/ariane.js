import { TweenMax } from 'gsap'
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
  const show = TweenMax.to('#ariane', 1, { x: 0, y: 0 })
  const hide = TweenMax.to('#ariane', 1, {
    x: window.innerWidth * 0.8,
    y: window.innerHeight * -1.2,
  })

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
    triggerElement: '.trigger-ariane-out',
    triggerHook: 'onCenter',
  })
    .setTween(hide)
    .on('start', e => {
      e.scrollDirection === 'FORWARD' && animOut()
      e.scrollDirection === 'REVERSE' && animIn()
    })
    .addTo(controller)
}
