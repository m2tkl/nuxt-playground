import { ref } from '@nuxtjs/composition-api'

/**
 * @param initialVal default initial flag state
 * @returns isOn - flag state
 * @returns toggle - toggle flag state
 * @returns on - set flag on
 * @returns off - set flag off
 */
const useFlagState = (initialVal: boolean) => {
  const isOn = ref<boolean>(initialVal)

  const toggle = () => {
    isOn.value = !isOn.value
  }

  const on = () => {
    isOn.value = true
  }

  const off = () => {
    isOn.value = false
  }

  return {
    isOn,
    toggle,
    on,
    off
  }
}

export default useFlagState
