import { EXPECTED_MOSH_API_KEYS, useQuenchTimeout } from '../helpers.js'

export default function register(quench) {
  quench.registerBatch(
    'mosh.api',
    (context) => {
      const { describe, it, assert } = context

      describe('game.mosh', function () {
        useQuenchTimeout(this)

        it('exposes the public system API', function () {
          assert.isObject(game.mosh)
          for (const key of EXPECTED_MOSH_API_KEYS) {
            assert.property(game.mosh, key, 'Missing API member: ' + key)
          }
          assert.equal(game.system.id, 'mosh')
          assert.equal(
            game.mosh.MothershipActor,
            CONFIG.Actor.documentClass
          )
          assert.equal(
            game.mosh.MothershipItem,
            CONFIG.Item.documentClass
          )
        })
      })
    },
    { displayName: 'System API' }
  )
}
