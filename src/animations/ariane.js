import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller, { isMobile } from '../main'
import getLottie from './ariane.lottie'

const IN = 0
const TEXT_IN = 1
const TEXT_OUT = 2
const OUT = 3

export default async () => {
  const anim = await getLottie()
  const timeline = new TimelineMax()

  const animIn = () => {
    anim.setDirection(1)
    anim.play()
  }
  const animOut = () => {
    anim.setDirection(-1)
    anim.play()
  }

  timeline
    .set('.ariane-area', { scale: 0.7 })
    .to(document.body, 1, { backgroundColor: '#005b8b' }, IN)
    .fromTo(
      '.ariane-area',
      1,
      { x: '-100%', y: '100%' },
      {
        x: '0%',
        y: '5%',
        onComplete: animIn,
        onReverseComplete: animOut,
      },
      IN,
    )
    .fromTo('.text-ariane', 1, { x: '-101%' }, { x: '0%' }, IN)

  timeline
    .to('.text-ariane .text', 1, { opacity: 1 }, TEXT_IN)
    .to('.ariane-area', 1, { y: isMobile && '14%' }, TEXT_IN)
    .to('.text-ariane .text', 0.5, { opacity: 0, delay: 1 }, TEXT_OUT)

  timeline
    .to(
      '.ariane-area',
      1,
      {
        x: '100%',
        y: '-100%',
        delay: 1.5,
        onReverseComplete: animIn,
      },
      OUT,
    )
    .to('.text-ariane', 1, { x: '-101%', delay: 1, onStart: animOut }, OUT)

  new ScrollMagic.Scene({
    triggerElement: '#ariane',
    triggerHook: 'onEnter',
  })
    .setTween(timeline)
    .addTo(controller)
}
