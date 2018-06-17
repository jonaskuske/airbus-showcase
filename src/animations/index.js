import welcome from './welcome'
import a350 from './a350'
import ariane from './ariane'

const loadAll = () => {
  welcome()
  a350()
  ariane()
}

export default {
  loadAll,
  a350,
  ariane,
}
