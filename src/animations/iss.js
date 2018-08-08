import { TweenMax, TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import controller, { isMobile } from '../main'
import getLottie from './iss.lottie'

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
    .set('.iss-area', { scale: 1.2, opacity: 0, y: isMobile ? '40%' : '50%' })
    .to(document.body, 1, { backgroundColor: '#003b71' }, IN)
    .fromTo(
    '.iss-area',
    1,
    { rotation: 0 },
    {
      rotation: 21.5,
      scale: 1.8,
      opacity: 1,
      onComplete: animIn,
      onReverseComplete: animOut,
    },
    IN,
  )
    .fromTo('.text-iss', 1, { x: '-101%' }, { x: '0%' }, IN)

  timeline
    .to('.text-iss .text', 1, { opacity: 1 }, TEXT_IN)
    .to('.text-iss .text', 0.5, { opacity: 0, delay: 1 }, TEXT_OUT)

  timeline
    .to(
    '.iss-area',
    1,
    {
      rotation: 60,
      scale: 2.7,
      opacity: 0,
      delay: 1.5,
      onReverseComplete: animIn,
    },
    OUT,
  )
    .to('.text-iss', 1, { x: '-101%', delay: 1, onStart: animOut }, OUT)

  new ScrollMagic.Scene({
    triggerElement: '#iss',
    triggerHook: 'onEnter',
  })
    .setTween(timeline)
    .addTo(controller)
}
