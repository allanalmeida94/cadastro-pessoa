"use client";

import Button from '@/components/Button';
import Input from '@/components/Input';
import UnauthenticatedLayout from '@/components/ui/UnauthenticatedLayout';
import { createUserSchema, userData } from '@/utils/schemas/createUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Cadastro() {
  const [error, setError] = useState('');
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();



  const {register, handleSubmit, formState: {errors}} = useForm<userData>({resolver: zodResolver(createUserSchema)});

  async function createUser(data: userData) {
    setFormSubmitting(true)
    try {
      const response = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const result = await response.json();

      if (response.status === 201) {
        alert(result.message);
        router.push('/login');
      } else {
        renderError(result.message);
      }
    } catch (error) {
      renderError(error as string)
    }
  }


  function renderError(msg: string) {
    setFormSubmitting(false)
    setError(msg),
    setTimeout(() => {
      setError('')
    }, 3000);
  }

  function handleClickGoogle() {
    alert('Login realizado com sucesso!')
    router.push('/pessoa')
  }

  return (
    <UnauthenticatedLayout>
      <div className='flex justify-center items-center min-h-[calc(100vh-80px)]'>
        <div className='flex flex-col w-1/3 justify-center border rounded-md p-10'>
          <h1 className='flex text-2xl font-bold justify-start items-center my-2'>
            Cadastro
          </h1>
              <form onSubmit={handleSubmit(createUser)}>
                <Input label='Email' type='email' register={register('email')} error={errors.email?.message} />
                <Input label='Senha' type='password' register={register('password')} error={errors.password?.message}/>
                {error &&
                  <span className="text-red-500 text-md mt-1">
                      {error}
                  </span>
                }
                <div className='flex mt-5'>
                  <Button type='submit' text={isFormSubmitting ? "Carregando..." : "Cadastrar"}
                    disabled={isFormSubmitting} backgroundColor='bg-blue-500' className='w-full text-white bg-blue-500 hover:bg-blue-600'/>
                </div>
                <hr className='my-5 border-slate-400'/>
                <div className='flex'>
                  <Button handleClick={handleClickGoogle} text={isFormSubmitting ? "Entrando..." : "Entrar com Google"}
                    disabled={isFormSubmitting} backgroundColor='bg-red-500' className='w-full text-white hover:bg-red-600' />
                </div>
                <div className='mt-5'>
                  <span className='text-lg'>
                    Já tem cadastro?
                    <Link href="/login" className='ml-1 text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'>
                      Fazer login
                    </Link>
                  </span>
                </div>
              </form>
        </div>
      </div>
  </UnauthenticatedLayout>
  )

}
