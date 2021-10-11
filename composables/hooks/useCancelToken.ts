/**
 * https://github.com/axios/axios#cancellation
 */
import { useContext, ref, computed } from '@nuxtjs/composition-api'
import { CancelTokenSource } from 'axios'

export const useCancelToken = () => {
  const { CancelToken, isCancel } = useContext().$axios

  const cancelSrc = ref<CancelTokenSource>(CancelToken.source())

  const cancelToken = computed(() => cancelSrc.value.token)

  const cancelPreviousCall = () => {
    cancelSrc.value.cancel('Cancel previous api calling.')
    cancelSrc.value = CancelToken.source()
  }

  return {
    isCancel,
    cancelPreviousCall,
    cancelToken
  }
}
