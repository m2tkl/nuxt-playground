<template>
  <v-row justify="center" align-content="center">
    <v-col cols="12" sm="6">
      <v-card flat outlined tile class="pa-4">
        <v-card-title class="justify-center"> Login </v-card-title>
        <v-card-text>
          <v-text-field v-model="formState.email" label="Username"> </v-text-field>
          <v-text-field
            v-model="formState.password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-on:click:append="showPassword = !showPassword"
            required
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn block tile color="primary" v-on:click="login">Login</v-btn>
        </v-card-actions>
        <v-card-text class="pl-2">
          <ul>
            <li>
              Forgot
              <nuxt-link to="/password-reset">Username / Password?</nuxt-link>
            </li>
            <li>
              Don't have any account?
              <nuxt-link to="/signup">Sign up</nuxt-link>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useForm } from '@/composables/useForm'

export default defineComponent({
  layout: 'entry',
  setup() {
    const { formState, validateForm } = useForm()
    const showPassword = ref(false)
    const checkbox = ref(false)

    const login = () => {
      const { err, message } = validateForm()
      if (err) {
        console.log(message)
        return
      }
    }

    return {
      formState,
      showPassword,
      checkbox,
      login
    }
  },
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
