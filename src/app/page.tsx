'use client'

import Link from 'next/link'
import ButtonRedirect from './components/ButtonRedirect'
export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={'/login'}>login</Link>
        </li>
        <li>
          <Link href={'/register'}>register</Link>
        </li>
      </ul>
      <ButtonRedirect />
    </main>
  )
}
