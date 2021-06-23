export type SearchResponse = {
  total_count: number
  incomplete_result: boolean
  items: Index[]
}

export type Index = {
  id: number
  name: string
  description: string
  owner: RepositoryOwner
  stargazers_count: number
}

export type RepositoryOwner = {
  login: string
}
