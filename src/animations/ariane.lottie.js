import lottie from 'lottie-web'

export default async () => {
  const data = await fetch('http://airbus.riekehelmers.com/ariane.json')
    .then(r => r.json())
    .catch(e => console.error(e))
  if (data) {
    const anim = lottie.loadAnimation({
      container: document.querySelector('.ariane-area'),
      animationData: data,
      autoplay: false,
    })
    anim.setSpeed(3)
    return anim
  }
}
