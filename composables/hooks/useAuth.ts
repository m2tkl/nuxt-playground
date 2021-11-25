import { useContext } from '@nuxtjs/composition-api'

export const useAuth = () => {
  const { app } = useContext()

  const login = () => {
    return true
  }

  return {
    login
  }
}
