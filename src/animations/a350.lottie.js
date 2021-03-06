import lottie from 'lottie-web'

export default async () => {
  const data = await fetch('./animationData/a350.json')
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
  } else {
    throw new Error('Failed to load animation for A350: fetching data failed.')
  }
}
