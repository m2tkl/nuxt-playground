/**
 * Reference:
 *   vue-composition-apiで作るカスタムHook入門〜useHoge()を自作してみよう〜
 *   https://zenn.dev/meijin/articles/34b9482dbc856d2523ed
 */
import { reactive, Ref, toRefs } from '@nuxtjs/composition-api'
import { AxiosError } from 'axios'

type useApiResult<T> = {
  handleApi: () => Promise<T | null>
  error: Ref<ApiErrorResponse | null>
  loading: Ref<boolean>
}

type ApiErrorResponse = {
  message: string
  status: number
  reason: Record<string, string>
}

export type useApi = {
  <T>(apiFunc: () => Promise<T>): useApiResult<T>
}


export const useApi: useApi = (apiFunc) => {
  const state = reactive<{
    error: ApiErrorResponse | null;
    loading: boolean;
  }>({
    error: null,
    loading: false,
  });

  const handleApi = async () => {
    state.loading = true;

    return await apiFunc()
      .then((apiResponse) => {
        state.error = null
        return apiResponse;
      })
      .catch((err: AxiosError) => {
        state.error = {
          message: err.response?.data?.message,
          status: err.response?.status || 500,
          reason: err.response?.data,
        };
        return null;
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    handleApi,
    ...toRefs(state)
  }
}
