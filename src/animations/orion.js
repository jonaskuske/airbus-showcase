import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller, { isMobile } from '../main'
import getLottie from './orion.lottie'

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
    .set('orion-area', { scale: 0.9 })
    .to(document.body, 1, { backgroundColor: '#1b1e48' }, IN)
    .fromTo(
      '.orion-area',
      1,
      { x: '-100%', y: '100%' },
      {
        x: isMobile ? '0%' : '20%',
        y: isMobile ? '25%' : '15%',
        onComplete: animIn,
        onReverseComplete: animOut,
      },
      IN,
    )
    .fromTo('.text-orion', 1, { x: '-101%' }, { x: '0%' }, IN)

  timeline
    .to('.text-orion .text', 1, { opacity: 1 }, TEXT_IN)
    .to('.text-orion .text', 0.5, { opacity: 0, delay: 1 }, TEXT_OUT)

  timeline
    .to(
      '.orion-area',
      1,
      {
        x: '100%',
        y: isMobile ? '-30%' : '-100%',
        delay: 1.5,
        onReverseComplete: animIn,
      },
      OUT,
    )
    .to('.text-orion', 1, { x: '-101%', delay: 1, onStart: animOut }, OUT)

  new ScrollMagic.Scene({
    triggerElement: '#orion',
    triggerHook: 'onEnter',
  })
    .setTween(timeline)
    .addTo(controller)
}
