export type SearchResponse = {
  total_count: number
  incomplete_result: boolean
  items: Repository[]
}

export type Repository = {
  id: number
  name: string
  description: string
  owner: RepositoryOwner
  stargazers_count: number
}

export type RepositoryOwner = {
  login: string
}
