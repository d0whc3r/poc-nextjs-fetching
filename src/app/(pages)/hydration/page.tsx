import { dehydrate } from '@tanstack/react-query'
import { getUsers } from '@/app/lib/api/get-users'
import { getQueryClient } from '@/app/lib/query-client/get-query-client'
import { Hydrate } from '@/app/lib/hydrate/hydrate-client'
import { ListUsers } from '@/app/ui/ListUsers/list-users'
import { getServerJwt } from '@/app/lib/jwt/get-jwt'

export default async function Page() {
  const queryKey = ['hydrate-users']
  const queryClient = getQueryClient()
  const jwt = await getServerJwt()
  await queryClient.prefetchQuery({ queryKey, queryFn: () => getUsers({ jwt }) })
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers queryKey={queryKey} />
    </Hydrate>
  )
}
