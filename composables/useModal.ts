import { ref } from '@nuxtjs/composition-api'

/**
 * Modal operation
 * @returns modalState
 * @returns openModal - set modalState true
 * @returns closeModal - set modalState false
 */
const useModal = () => {
  const modalState = ref<boolean>(false)

  const openModal = () => {
    modalState.value = true
  }

  const closeModal = () => {
    modalState.value = false
  }

  return {
    modalState,
    openModal,
    closeModal,
  }
}

export default useModal
