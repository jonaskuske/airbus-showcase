import lottie from 'lottie-web'

export default async () => {
  const data = await fetch('./animationData/iss.json')
    .then(r => r.json())
    .catch(e => console.error(e))

  if (data) {
    const anim = lottie.loadAnimation({
      container: document.querySelector('.iss-area'),
      animationData: data,
      autoplay: false,
    })

    anim.setSpeed(3)
    return anim
  } else {
    throw new Error('Failed to load animation for ISS: fetching data failed.')
  }
}
