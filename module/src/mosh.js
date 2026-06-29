import registerActorsSmoke from './quench/batches/actors-smoke.js'
import registerItemsSmoke from './quench/batches/items-smoke.js'
import registerApi from './quench/batches/api.js'

const BATCH_REGISTRARS = [
  registerActorsSmoke,
  registerItemsSmoke,
  registerApi
]

Hooks.on('quenchReady', (quench) => {
  for (const register of BATCH_REGISTRARS) {
    register(quench)
  }
})
