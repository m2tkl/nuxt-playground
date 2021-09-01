<template>
  <v-row>
    <v-col>
      <h1>Modal sample</h1>

      <v-btn v-on:click="openModal">open</v-btn>

      <modal v-model="modalState">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Privacy Policy
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text v-on:click="closeModal">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </modal>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import Modal from '@/components/Modal.vue'
import useModal from '@/composables/useModal'

export default defineComponent({
  components: {
    Modal,
  },
  setup() {
    const { modalState, openModal, closeModal } = useModal()
    return {
      modalState,
      openModal,
      closeModal,
    }
  },
})
</script>
