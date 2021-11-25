<template>
  <section>
    <h2>Articles</h2>
    <button @click="loadArticles" :disabled="$process.inProgress.value">Get articles</button>
    <div v-if="!$process.inProgress.value">
      <ul v-for="(article, index) in articles" :key="index">
        <li>{{ article }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import { useCancelToken } from '@/composables/hooks/useCancelToken'

export default defineComponent({
  components: {
  },
  setup() {
    const { app } = useContext()
    const { isCancel, cancelToken, cancelPreviousCall } = useCancelToken()

    const articles = ref()

    const loadArticles = async () => {
      app.$process.start()
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
        .finally(() => {
          app.$process.finish();
        })
    }

    return {
      articles,
      loadArticles,
    }
  },
})
</script>
