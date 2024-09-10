import Image from 'next/image';
import { googleIcon } from '../../public/icons';
import { useState } from 'react';

export default function Autenticacao() {
  const[formMode, setFormMode] = useState<'login' | 'register'>('login')

  function handleFormMode() {
    setFormMode(formMode === 'login' ? 'register' : 'login')
  }

  return (
  <div className='flex h-screen'>
    <div className='w-2/3 h-full relative'>
      <Image src={'https://picsum.photos/1920/1080'} alt={'Imagem aleatória'} fill className='object-cover'/>
    </div>
    <div className='flex flex-col w-1/3 justify-center px-10 mb-20'>
      <h1 className='flex text-2xl font-bold justify-start items-center my-2'>
        {formMode === 'login' ? 'Entre com sua conta' : 'Cadastro'}
      </h1>
      <form className='bg-white py-5 rounded-md w-full'>
        <div className='flex flex-col py-3'>
          <label className='mb-1 text-xl font-semibold'>Email</label>
          <input type="email" name="email" className='p-2 rounded-md text-lg border bg-gray-200 focus:outline-none focus:bg-white focus:border focus:border-blue-500'/>
        </div>
        <div className='flex flex-col py-3'>
          <label className='mb-1 text-xl font-semibold'>Senha</label>
          <input type="password" name="senha" className='p-2 rounded-md text-lg border bg-gray-200 focus:outline-none focus:bg-white focus:border focus:border-blue-500'/>
        </div>
        <div className='flex mt-5'>
          <button type="submit" className='w-full px-4 py-2 text-white font-semibold text-xl bg-blue-500 hover:bg-blue-600 rounded-md'>
            {formMode === 'login' ? 'Entrar' : 'Cadastrar'}
          </button>
        </div>
        <hr className='my-5 border-slate-300'/>
        <div className='flex'>
          <button className='flex justify-center items-center w-full px-4 py-2 text-white font-semibold text-xl bg-red-500 hover:bg-red-600 rounded-md'>Entrar com Google <span className='ml-2'>{googleIcon()}</span></button>
        </div>
      </form>
      <div>
        <span className='text-lg'>
          {formMode === 'login' ? 'Não possui conta? ' : 'Já tem cadastro? '}
          <a onClick={handleFormMode} className='text-blue-500 hover:text-blue-700 font-semibold cursor-pointer'>
            {formMode === 'login' ? 'Crie gratuitamente' : 'Fazer login'}
          </a>
        </span>
      </div>
    </div>
  </div>

  )

}
