import { Inject, Context } from '@nuxt/types/app'
import { ref, Ref } from '@nuxtjs/composition-api'

export type Process = {
  inProgress: Ref<boolean>
  start: () => void
  finish: () => void
}

export default (_: Context, inject: Inject) => {
  const inProgress = ref<boolean>(false)

  const start = () => {
    console.log('Process start.')
    inProgress.value = true
  }

  const finish = () => {
    console.log('Process finish.')
    inProgress.value = false
  }

  const process: Process = {
    inProgress,
    start,
    finish,
  }

  inject('process', process)
}
