import { describe, expect, test } from 'bun:test'

import { POSTHOG_COOKIELESS_DISTINCT_ID, resolveServerIdentity } from '@/lib/posthog-identity'

describe('resolveServerIdentity', () => {
  test('reprend l’identifiant et la session du navigateur', () => {
    expect(resolveServerIdentity('visitor-1', 'session-1')).toEqual({
      distinctId: 'visitor-1',
      anonymous: false,
      properties: { $session_id: 'session-1' },
    })
  })

  test('visiteur sans cookie : identifiant jetable, sans profil de personne', () => {
    const identity = resolveServerIdentity(POSTHOG_COOKIELESS_DISTINCT_ID, 'session-1', () => 'tmp')
    expect(identity).toEqual({
      distinctId: 'tmp',
      anonymous: true,
      properties: { $process_person_profile: false },
    })
  })

  test('ignore les valeurs absentes, vides ou démesurées', () => {
    expect(resolveServerIdentity(null, null, () => 'tmp').anonymous).toBe(true)
    expect(resolveServerIdentity('   ', undefined, () => 'tmp').anonymous).toBe(true)
    expect(resolveServerIdentity('x'.repeat(201), undefined, () => 'tmp').anonymous).toBe(true)
  })
})
