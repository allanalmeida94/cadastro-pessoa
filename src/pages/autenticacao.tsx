import Image from 'next/image';
import { googleIcon } from '../../public/icons';
import { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';

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
        <Input labelName='Email' typeInput='email' nameInput='email'/>
        <Input labelName='Senha' typeInput='password' nameInput='senha'/>
        <div className='flex mt-5'>
          <Button handleClick={() => alert('Login realizado')} className='w-full bg-blue-500 hover:bg-blue-600 font-semibold'>
            {formMode === 'login' ? 'Entrar' : 'Cadastrar'}
          </Button>
        </div>
        <hr className='my-5 border-slate-300'/>
        <div className='flex'>
          <Button handleClick={() => alert('Login com google realizado')} className='flex justify-center items-center w-full bg-red-500 hover:bg-red-600 font-semibold'>
            Entrar com Google <span className='ml-2'>{googleIcon()}</span>
          </Button>
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
