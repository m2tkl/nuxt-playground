<template>
  <section>
    <h2>Articles</h2>
    <loading :loading="isLoading"/>
    <button @click="loadArticles" :disabled="isLoading">Get articles</button>
    <div v-if="!isLoading">
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
import Loading from '@/components/molecules/Loading.vue'

export default defineComponent({
  components: {
    Loading,
  },
  setup() {
    const { app } = useContext()
    const { isCancel, cancelToken, cancelPreviousCall } = useCancelToken()

    const articles = ref()

    const isLoading = ref(false)
    const loadArticles = async () => {
      isLoading.value = true

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
          isLoading.value = false
        })
    }

    return {
      articles,
      isLoading,
      loadArticles,
    }
  },
})
</script>
