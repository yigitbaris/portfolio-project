'use client'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <div
      className='font-extrabold cursor-pointer text-xl text-slate-800'
      onClick={() => {
        router.push('/')
      }}
    >
      Barış.dev
    </div>
  )
}
export default Logo
