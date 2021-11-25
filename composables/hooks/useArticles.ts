import { ref, useContext, useAsync } from '@nuxtjs/composition-api'
import { useApi } from './useApi'

export const useArticles = () => {

  const { app } = useContext()

  const {
    handleApi,
    loading,
    error,
  } = useApi(async () => {
    // return await app.$repositories('articles').get()
  })

  const fetchArticles = async () => {
    const res = await handleApi()

    if (res) {
      return res
    }

    if (error.value) {
      console.error(error.value)
    }
  }

  return {
    loading,
    error,
    fetchArticles
  }
}
