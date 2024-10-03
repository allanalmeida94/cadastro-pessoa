"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import Navbar from '../Navbar'

export default function MainLayout({children}: {children: ReactElement}) {
  const router = useRouter();
  const {data: session, status} = useSession({required: true, onUnauthenticated() {
    router.push('/login')
  },});

  if (status === "loading") {
    return null
  }

  if (!session) {
    router.push('/login')
  }

  return (
    <div className='flex min-h-screen'>
      <div className='flex flex-col items-center border-r shadow-md'>
        <div className='flex flex-col flex-grow w-[250px]'>
          <div className='flex flex-col justify-center items-center h-20 bg-blue-900 text-white'>
              <FaPeopleGroup size={40}/>
              <span className='text-xl font-semibold'>
                Cadastro Soft
              </span>
          </div>
          <aside className='flex flex-col mt-10'>
            <Navbar />
          </aside>
        </div>
        <button onClick={async () => {
          const data = await signOut({redirect: false, callbackUrl: "/login"})
          router.push(data.url)
          }}
          className='flex justify-center items-center px-4 py-2 mb-10 border-none text-xl font-semibold hover:text-red-700'>
          Sair <span className='ml-2'><FaSignOutAlt size={20}/></span>
        </button>
      </div>
      <div className='flex-grow p-10'>
        {children}
      </div>
    </div>
  )
}
