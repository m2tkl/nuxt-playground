import { Context } from '@nuxt/types'

const currentAuthenticatedUser = () => {
  return {
    name: 'hoge',
    email: 'hoge@example.com'
  }
}

export default async ({ redirect, store }: Context) => {

  try {
    const user = currentAuthenticatedUser()
    // const user = null

    if (!user) {
      console.error('not authenticated')
      store.dispatch('user/signOut')
      return redirect('/')
    }

    store.dispatch('user/signIn', user)

  } catch (error) {
    console.log(error)
    store.dispatch('user/signOut')
    return redirect('/')
  }
}
