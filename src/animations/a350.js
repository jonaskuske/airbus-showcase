import { TimelineMax, TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller, { isMobile } from '../main'
import getLottie from './a350.lottie'

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
    .fromTo(
      document.body,
      1,
      { backgroundColor: '#ffffff' },
      { backgroundColor: '#172a67' },
      IN,
    )
    .fromTo(
      '.a350-area',
      1,
      { x: '-100%', y: '22%' },
      { x: '0%', y: '0%', onComplete: animIn, onReverseComplete: animOut },
      IN,
    )
    .fromTo('.text-a350', 1, { x: '-101%' }, { x: '0%' }, IN)

  timeline
    .to('.text-a350 .text', 1, { opacity: 1 }, TEXT_IN)
    .to('.a350-area', 1, { y: isMobile && '10%' }, TEXT_IN)
    .to('.text-a350 .text', 0.5, { opacity: 0, delay: 1 }, TEXT_OUT)

  timeline
    .to(
      '.a350-area',
      1,
      {
        x: '100%',
        y: '-22%',
        delay: 1,
        onReverseComplete: animIn,
      },
      OUT,
    )
    .to('.text-a350', 1, { x: '-101%', delay: 0.5, onStart: animOut }, OUT)

  new ScrollMagic.Scene({
    triggerElement: '#a350',
    triggerHook: 'onEnter',
  })
    .setTween(timeline)
    .addTo(controller)
}
