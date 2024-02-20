import { Hydrate } from '@/app/lib/hydrate/hydrate-client'
import { dehydrate } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { queryClient } from './hydration-queryclient'
import { getServerJwt } from '@/app/lib/jwt/get-jwt'
import { getUsers } from '@/app/lib/api/get-users'

export default async function HydrationLayout({ children }: Readonly<PropsWithChildren>) {
  const queryKey = ['hydrate-users-layout']
  const jwt = await getServerJwt()
  await queryClient.prefetchQuery({ queryKey, queryFn: () => getUsers({ jwt }) })
  const dehydratedState = dehydrate(queryClient)

  return <Hydrate state={dehydratedState}>{children}</Hydrate>
}
