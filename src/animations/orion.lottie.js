import lottie from 'lottie-web'

export default async () => {
  const data = await fetch('./animationData/orion.json')
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
  } else {
    throw new Error('Failed to load animation for Orion: fetching data failed.')
  }
}
