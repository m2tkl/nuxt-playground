<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" sm="6">
        <v-card flat outlined tile class="pa-4">
          <v-card-title class="justify-center"> Login </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="formState.email"
              label="Username"
              :rules="nameRules"
              :success-messages="isSuccess"
              class="pb-3"
            ></v-text-field>
            <v-text-field
              v-model="formState.password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              v-on:click:append="showPassword = !showPassword"
              :rules="passwordRules"
              :success-messages="validPassword"
              class="pb-2"
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { useForm } from '@/composables/useForm'
import { isValidPassword } from '@/utils/validation'

export default defineComponent({
  layout: 'entry',
  setup() {
    const { formState, validateForm } = useForm()
    const showPassword = ref(false)
    const checkbox = ref(false)

    const login = () => {
      console.log(isValidPassword(formState.password))
      const { err, message } = validateForm()
      if (err) {
        console.log(message)
        return
      }
    }

    const isNotEmpty = (val: string) => {
      return !!val
    }

    const lessThanEqual10 = (val: string) => {
      return val.length <= 10
    }

    const isSuccess = computed(() => {
      if (isNotEmpty(formState.email) && lessThanEqual10(formState.email)) {
        return 'OK'
      } else {
        return null
      }
    })

    const validPassword = computed(() => {
      if (
        isNotEmpty(formState.password) &&
        isValidPassword(formState.password)
      ) {
        return 'OK'
      } else {
        return null
      }
    })

    const nameRules = [
      (v: string) => isNotEmpty(v) || 'Username is required',
      (v: string) =>
        lessThanEqual10(v) || 'Name must be less than 10 characters.',
    ]

    const passwordRules = [
      (v: string) => isNotEmpty(v) || 'Password is required',
      (v: string) => isValidPassword(v) || 'Password format is invalid',
    ]

    return {
      formState,
      showPassword,
      checkbox,
      login,
      nameRules,
      isSuccess,
      passwordRules,
      validPassword,
    }
  },
})
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
