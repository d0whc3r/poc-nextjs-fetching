import { getServerJwt } from '@/app/lib/jwt/get-jwt'
import { getUsers } from '@/app/lib/api/get-users'
import { ListUsers } from '@/app/ui/ListUsers/list-users'

export default async function Page() {
  const jwt = await getServerJwt()
  const users = await getUsers({ jwt })

  return <ListUsers queryKey={['initial-data']} users={users} />
}
