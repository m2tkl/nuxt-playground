<template>
  <v-container fluid pa-0>
    <v-row no-gutters>
      <v-col class="text-center" cols="12">
        <v-parallax
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-row align="end" justify="center">
            <v-col cols="8">
              <h1 class="text-h3 font-weight-thin mb-8">Nuxt-Playground</h1>
              <h4 class="subheading">This is my sample application.</h4>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="mb-4">
            <v-col>
              <v-btn flat tile @click="login">Login</v-btn>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col class="text-center" cols="10" md="5">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="10" md="5">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'
import { Context } from '@nuxt/types'

export default defineComponent({
  layout: 'entry',
  setup({ store }: Context) {
    const router = useRouter()
    const login = () => {
      router.push('/login')
    }
    return {
      login,
    }
  },
})
</script>
