<template>
  <section>
    <h2>Articles</h2>
    <ul v-for="(article, index) in state.articles" :key="index">
      <li>{{ article }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      articles: [] as Array<Object>,
    })
    const { app } = useContext()
    const articleRepository = app.$repositories('articles')
    const userRepository = app.$repositories('user')

    const get = async () => {
      const response = await articleRepository.postMessage()
      state.articles = response
    }

    get()

    return {
      state,
    }
  },
})
</script>
