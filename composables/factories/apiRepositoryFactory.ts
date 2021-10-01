import { ArticlesRepository } from '~/composables/repositories/articlesRepository'
import { UserRepository } from '~/composables/repositories/userRepository'

export interface Repositories {
  articles: typeof ArticlesRepository
  user: typeof UserRepository
}

const repositories: Repositories = {
  articles: ArticlesRepository,
  user: UserRepository
}

export const apiRepositoryFactory = {
  get: (key: keyof Repositories) => repositories[key]
}
