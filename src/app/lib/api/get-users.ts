import { User } from '@/app/types'
import { axiosInstance } from './axios'

interface GetUsers {
  jwt: string
}

export async function getUsers({ jwt }: GetUsers) {
  // https://jsonplaceholder.typicode.com/users
  const response = await axiosInstance({ jwt }).get<User[]>('http://localhost:3001/users')

  return response.data
}
