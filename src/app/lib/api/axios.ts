import axios from 'axios'

interface AxiosInstanceProps {
  jwt: string
}

export function axiosInstance({ jwt }: AxiosInstanceProps) {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
  })
}
