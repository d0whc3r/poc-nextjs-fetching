import { ListUsers } from '@/app/ui/ListUsers/list-users'

export default async function Page() {
  const queryKey = ['hydrate-users-layout']

  return <ListUsers queryKey={queryKey} />
}
