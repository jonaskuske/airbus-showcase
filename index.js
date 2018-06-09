let HEIGHT = window.innerHeight

let animationStarted = false

const animationContainer = document.querySelector('#animation-container')
const airplane = document.querySelector('.airplane__animation')
const text = document.querySelector('.airplane__text')

const airplaneAnimation = lottie.loadAnimation({
  container: airplane,
  path: 'animations/airplane/data.json',
  autoplay: false
})
airplaneAnimation.setSpeed(1.8)

airplane.addEventListener('transitionend', function ({ propertyName }) {
  if (propertyName !== 'transform' || !animationStarted) return
  airplaneAnimation.goToAndPlay(0)
  text.classList.add('show')
})

document.addEventListener('scroll', function () {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop;
  const inScrollArea = scroll > HEIGHT * 0.8 && scroll < HEIGHT * 1.8

  if (!animationStarted && inScrollArea) {
    animationStarted = true
    airplane.classList.remove('animate-out')
    airplane.classList.add('animate-in')
  } else if (animationStarted && !inScrollArea) {
    animationStarted = false
    text.classList.remove('show')
    airplaneAnimation.pause()
    airplane.classList.remove('animate-in')
    scroll >= HEIGHT * 1.8 && airplane.classList.add('animate-out')
  }
})