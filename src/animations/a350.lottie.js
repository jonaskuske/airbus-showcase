import lottie from 'lottie-web'

export default async () => {
  const data = await fetch('http://airbus.riekehelmers.com/a350.json')
    .then(r => r.json())
    .catch(e => console.error(e))
  if (data) {
    const anim = lottie.loadAnimation({
      container: document.querySelector('.a350-area'),
      animationData: data,
      autoplay: false,
    })

    anim.setSpeed(3)
    return anim
  }
}
