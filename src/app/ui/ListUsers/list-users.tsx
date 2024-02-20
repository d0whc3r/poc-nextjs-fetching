'use client'

import { User } from '@/app/types'
import { useQuery, QueryKey } from '@tanstack/react-query'
import { getUsers } from '@/app/lib/api/get-users'
import { xJwt } from '@/app/lib/jwt/use-jwt'

interface ListUsersProps {
  queryKey: QueryKey
  users?: User[]
}

export function ListUsers({ queryKey, users }: ListUsersProps) {
  const jwt = xJwt()
  console.log(jwt)
  const { data } = useQuery<User[]>({
    queryKey,
    queryFn: () => getUsers({ jwt }),
    ...(users && { initialData: users }),
  })

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 20,
      }}
    >
      {data?.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
          <img src={`https://robohash.org/${user.id}?set=set2&size=180x180`} alt={user.name} style={{ width: 180, height: 180 }} />
          <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  )
}
