import './assets/styles/style.css'
import lottie from 'lottie-web'
import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import { TweenMax } from 'gsap'
import animations from './assets/animationdata'

const a350ani = lottie.loadAnimation({
  container: document.querySelector('#a350'),
  animationData: animations.a350,
  autoplay: !!0,
})

lottie.loadAnimation({
  container: document.querySelector('#ariane'),
  animationData: animations.ariane,
  autoplay: !!0,
})

const show = TweenMax.to('#a350', 2, { x: 0, y: 0 })
const hide = TweenMax.to('#a350', 2, {
  x: window.innerWidth,
  y: window.innerHeight * -0.2,
})
const Controller = new ScrollMagic.Controller({
  container: document.body,
  globalSceneOptions: {
    duration: '100%',
  },
})

const test = new ScrollMagic.Scene({})
  .setTween(show)
  .on('end', () => a350ani.play())
  .addTo(Controller)
new ScrollMagic.Scene({
  offset: window.innerHeight,
})
  .setTween(hide)
  .addTo(Controller)
