import { ListUsers } from '../../ui/ListUsers/list-users'

export default function Page() {
  return <ListUsers queryKey={['client-side']} />
}
