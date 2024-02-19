import { Suspense } from 'react'
import { ListUsers } from '../../ui/ListUsers/list-users'

export default async function Page() {
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}>
      <ListUsers queryKey={['stream-hydrate-users']} />
    </Suspense>
  )
}
