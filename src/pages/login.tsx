"use client";

import Button from '@/components/Button';
import Input from '@/components/Input';
import UnauthenticatedLayout from '@/components/ui/UnauthenticatedLayout';
import { userData, userSchema } from '@/utils/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [error, setError] = useState('');
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();
  const {status} = useSession();

  const {register, reset, handleSubmit, formState: {errors}} = useForm<userData>({resolver: zodResolver(userSchema)});

  const isAuthenticated = status === "authenticated";

  if (isAuthenticated) {
    router.push('/lista-pessoa')
  }

  async function logIn(data: userData) {
    setFormSubmitting(true)
    try {
      const sign = await signIn("credentials", {...data, redirect: false})

      if (!sign?.error) {
        redirect('/lista-pessoa')
      } else {
        renderError(sign.error.replace("Error: ", ""))
        reset();
      }
      setFormSubmitting(false)
    } catch {
      setFormSubmitting(false)
      renderError("Erro ao acessar o sistema, tente novamente mais tarde!")
    }
  }

  function renderError(msg: string) {
    setFormSubmitting(false)
    setError(msg),
    setTimeout(() => {
      setError('')
    }, 3000);
  }

  function handleClickGoogle() {}

  return (
  <UnauthenticatedLayout>
    <div className='flex justify-center items-center min-h-[calc(100vh-80px)]'>
      <div className='flex flex-col w-1/3 border rounded-md p-10 '>
        <h1 className='flex text-2xl font-bold justify-start items-center my-2'>
          Entre com sua conta
        </h1>
        <form onSubmit={handleSubmit(logIn)}>
          <Input label='Email' type='email' register={register('email')} error={errors.email?.message} />
          <Input label='Senha' type='password' register={register('password')} error={errors.password?.message}/>
          {error &&
            <span className="text-red-500 text-md mt-1">
                {error}
            </span>
          }
          <div className='flex mt-5'>
            <Button type='submit' text={isFormSubmitting ? "Entrando" : "Entrar"} disabled={isFormSubmitting}
              backgroundColor='bg-blue-500' className='w-full text-white bg-blue-500 hover:bg-blue-600'/>
          </div>
          <hr className='my-5 border-slate-400'/>
          <div className='flex'>
            <Button handleClick={handleClickGoogle} text='Entrar com Google' backgroundColor='bg-red-500' className='w-full text-white hover:bg-red-600' />
          </div>
        </form>
        <div className='mt-5'>
          <span className='text-lg'>
            Não possui conta?
            <Link href="/cadastro" className='ml-1 text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'>
              Crie gratuitamente
            </Link>
          </span>
        </div>
      </div>
    </div>
  </UnauthenticatedLayout>

  )

}
