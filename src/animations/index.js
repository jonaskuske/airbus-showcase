import welcome from './welcome'
import a350 from './a350'
import ariane from './ariane'
import iss from './iss'
import orion from './orion'

const loadAll = () => Promise.all([welcome(), a350(), ariane(), iss(), orion()])

export default {
  loadAll,
  welcome,
  a350,
  ariane,
  iss,
  orion,
}
