/** CI (software WebGL + dockerized Foundry) makes Actor/Item DB ops slow; bump Mocha's 2000ms default. */
export const QUENCH_DEFAULT_TIMEOUT_MS = 30000

/**
 * Call inside a describe/it body declared with `function () {}` (not arrow),
 * so `this` is the Mocha context.
 */
export function useQuenchTimeout(mochaCtx, ms = QUENCH_DEFAULT_TIMEOUT_MS) {
  if (mochaCtx && typeof mochaCtx.timeout === 'function') {
    mochaCtx.timeout(ms)
  }
  return ms
}

export const ACTOR_SMOKE = [
  {
    type: 'character',
    assert(actor, assert) {
      assert.equal(actor.type, 'character')
      assert.isAtLeast(actor.system.health?.max ?? 0, 1)
      assert.isObject(actor.system.stats)
      assert.isNumber(actor.system.stats.strength?.value)
    }
  },
  {
    type: 'creature',
    assert(actor, assert) {
      assert.equal(actor.type, 'creature')
      assert.isAtLeast(actor.system.health?.max ?? 0, 1)
    }
  },
  {
    type: 'ship',
    assert(actor, assert) {
      assert.equal(actor.type, 'ship')
      assert.isAtLeast(actor.system.health?.max ?? 0, 1)
    }
  }
]

export const ITEM_SMOKE = [
  {
    type: 'item',
    assert(item, assert) {
      assert.isNumber(item.system.quantity)
    }
  },
  {
    type: 'skill',
    assert(item, assert) {
      assert.isString(item.system.rank)
    }
  },
  {
    type: 'weapon',
    assert(item, assert) {
      assert.isString(item.system.damage)
    }
  },
  {
    type: 'armor',
    assert(item, assert) {
      assert.isNumber(item.system.armorPoints)
    }
  },
  {
    type: 'ability',
    assert(item, assert) {
      assert.property(item.system, 'description')
    }
  },
  {
    type: 'module',
    assert(item, assert) {
      assert.property(item.system, 'description')
    }
  },
  {
    type: 'condition',
    assert(item, assert) {
      assert.isNumber(item.system.severity)
    }
  },
  {
    type: 'crew',
    assert(item, assert) {
      assert.property(item.system, 'description')
    }
  },
  {
    type: 'repair',
    assert(item, assert) {
      assert.property(item.system, 'description')
    }
  },
  {
    type: 'class',
    assert(item, assert) {
      assert.property(item.system, 'description')
    }
  }
]

export const EXPECTED_MOSH_API_KEYS = [
  'MothershipActor',
  'MothershipItem',
  'rollItemMacro',
  'rollStatMacro',
  'initRollTable',
  'initRollCheck',
  'initModifyActor',
  'initModifyItem',
  'noCharSelected'
]

export async function deleteTestActor(actor) {
  if (!actor?.id) return
  const current = game.actors.get(actor.id)
  if (!current) return
  await current.delete()
}
