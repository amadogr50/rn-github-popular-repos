export type SearchResponse = {
  total_count: number
  incomplete_result: boolean
  items: Repository[]
}

export type ErrorResponse = {
  message: string
}

export type Repository = {
  id: number
  node_id: string
  name: string
  description: string
  owner: RepositoryOwner
  stargazers_count: number
}

export type RepositoryOwner = {
  login: string
  avatar_url: string
}
