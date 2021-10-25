/**
 * Setup helper
 *  - https://qiita.com/nobodytolove123/items/b020c8c93af20542ce08
 */
import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'

export const createSetupScope = (localVue: typeof Vue, done: jest.DoneCallback, mocks = {}) => {
  return (test: () => (unknown | Promise<unknown>)) => {
    const stub = Vue.extend({
      setup() {
        const callable = test as any

        const result = callable.constructor.name === "AsyncFunction"
          ? callable()
          : new Promise((resolve, reject) => {
            try {
              resolve(callable())
            } catch (e) {
              reject(e)
            }
          })

        result.then(() => done()).catch((e: any) => done(e))
        return {}
      },
      template: "<div></div>"
    })

    shallowMount(stub, {
      localVue,
      mocks
    })
  }
}
