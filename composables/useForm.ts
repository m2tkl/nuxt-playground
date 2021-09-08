import { reactive } from '@nuxtjs/composition-api'

export interface validationResult {
  err: boolean,
  message: string
}

export const useForm = () => {
  const formState = reactive({
    email: '',
    password: '',
  })


  const validateForm = (): validationResult => {
    if (!formState.email) {
      return {
        err: true,
        message: 'Email is empty.'
      }
    }

    if (!formState.password) {
      return {
        err: true,
        message: 'Password is empty.'
      }
    }

    return {
      err: false,
      message: 'OK'
    }
  }

  return {
    formState,
    validateForm,
  }
}
