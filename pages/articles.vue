<template>
  <section>
    <h2>Articles</h2>
    <div v-if="!loading">
      <ul v-for="(article, index) in state.articles" :key="index">
        <li>{{ article }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api'
import { useApi } from '@/composables/hooks/useApi'

export default defineComponent({
  setup() {
    const state = reactive({
      articles: [] as Array<Object>,
    })
    const { app } = useContext()

    const { handleApi, loading, error } = useApi(async () => {
      return await app.$repositories('articles').get()
    })

    const loadArticles = async () => {
      const response = await handleApi()

      console.log('error: ', error.value)
      if (error.value) {
        return
      }

      if (response) {
        state.articles = response
      }
    }

    loadArticles()

    return {
      state,
      loading,
    }
  },
})
</script>
