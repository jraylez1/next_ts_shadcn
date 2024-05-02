import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
export default function ButtonRedirect() {
  const router = useRouter()

  const goToLogin = () => {
    router.push('/login')
  }
  return <Button onClick={goToLogin}>Login</Button>
}
