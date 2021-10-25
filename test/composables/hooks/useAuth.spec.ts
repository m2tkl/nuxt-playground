import { useAuth } from '~/composables/hooks/useAuth'
import { createLocalVue } from '@vue/test-utils'
import { createSetupScope } from '~/test/test-utils/setup'


const localVue = createLocalVue()

describe('useAuth test', () => {

  it('composition api test sample', (done) => {
    const setup = createSetupScope(localVue, done)
    setup(() => {
      const { login } = useAuth()
      expect(login()).toBeTruthy()
    })
  })
})
