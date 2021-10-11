<template>
  <section>
    <h2>Articles</h2>
    <button @click="loadArticles">Get articles</button>
    <div v-if="!loading">
      <ul v-for="(article, index) in articles" :key="index">
        <li>{{ article }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useArticles } from '@/composables/hooks/useArticles'
import { useCancelToken } from '@/composables/hooks/useCancelToken'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const { loading } = useArticles()
    const { isCancel, cancelToken, cancelPreviousCall } = useCancelToken()

    const articles = ref()

    const loadArticles = async () => {
      cancelPreviousCall()

      articles.value = await app
        .$repositories('articles')
        .get({ cancelToken: cancelToken.value })
        .catch((err) => {
          if (isCancel(err)) {
            console.log(err)
            console.log('Cancel previous api call.')
          } else {
            console.error(err)
          }
        })
    }

    return {
      articles,
      loading,
      loadArticles,
    }
  },
})
</script>
