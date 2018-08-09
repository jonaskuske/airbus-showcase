import lottie from 'lottie-web'

export default async () => {
  const data = await fetch('http://airbus.riekehelmers.com/orion.json?v=2')
    .then(r => r.json())
    .catch(e => console.error(e))
  if (data) {
    const anim = lottie.loadAnimation({
      container: document.querySelector('.orion-area'),
      animationData: data,
      autoplay: false,
    })

    anim.setSpeed(3)
    return anim
  }
}
