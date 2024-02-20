import { getUsers } from '@/app/lib/api/get-users'
import { getServerJwt } from '@/app/lib/jwt/get-jwt'
import { ListUsers } from '@/app/ui/ListUsers/list-users'
import { queryClient } from '../hydration-queryclient'

export default async function Page() {
  const queryKey = ['hydrate-users-p2']
  const jwt = await getServerJwt()
  await queryClient.prefetchQuery({ queryKey, queryFn: () => getUsers({ jwt }) })

  return <ListUsers queryKey={queryKey} />
}
