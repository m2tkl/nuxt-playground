<template>
  <v-row justify="center" align-content="center">
    <v-col cols="12" sm="6">
      <v-card flat outlined tile>
        <v-card-title class="justify-center"> Login </v-card-title>
        <v-card-text>
          <v-text-field v-model="email" label="user name"> </v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-on:click:append="showPassword = !showPassword"
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn block tile color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'entry',
  setup() {
    const email = ref('')
    const showPassword = ref(false)
    return {
      email,
      showPassword,
    }
  },
})
</script>
