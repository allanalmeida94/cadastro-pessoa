import Button from '@/components/Button';
import RegisterForm from '@/components/RegisterForm';
import Table from '@/components/Table';
import Title from '@/components/Title';
import { Person } from '@/components/types';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react';

const mockData: Person[] = [
  {cpf: 12345678901, name: "Allan", age: 30, gender: "Masculino" },
  {cpf: 21514511545, name: "João", age: 10, gender: "Masculino" },
  {cpf: 72011454245, name: "Pamela", age: 13, gender: "Feminino" },
  {cpf: 78784158484, name: "Pedro", age: 21, gender: "Masculino" },
  {cpf: 45854845845, name: "Erica", age: 33, gender: "Feminino" },
]

export default function Home() {
  const[isRegister, setIsRegister] = useState(false);
  const router = useRouter();


  function handleExit() {
    router.push('/autenticacao')
  }

  function handleRegister() {
    alert('Cadastro realizado!')
  }

  function handleChangeScreen() {
    setIsRegister(!isRegister)
  }

  function renderTable() {
    return (
      <>
        <div className='flex justify-end mb-5'>
          <Button className='bg-blue-500 hover:bg-blue-700' handleClick={handleChangeScreen}>
            Novo cadastro
          </Button>
        </div>
        <Table mockData={mockData}/>
      </>
    )
  }

  function renderRegisterForm() {
    return (
      <>
        <div className='flex justify-end mb-5 space-x-5'>
          <Button className='bg-green-500 hover:bg-green-700' handleClick={handleRegister}>
            Cadastrar
          </Button>
          <Button className='bg-orange-500 hover:bg-orange-700' handleClick={handleChangeScreen}>
            Cancelar cadastro
          </Button>
        </div>
        <RegisterForm />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Cadastro pessoas</title>
        <meta name="description" content="Crud utilizando Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/user_icon.ico" />
      </Head>

      <main>
       <div className='flex flex-col justify-center items-center h-screen bg-slate-500'>
        <div className='w-2/3 p-4 bg-white rounded-xl'>
          <Title titleName='Sistema para cadastro de pessoas' />
          <hr className='mb-5 border-gray-300 border-2'/>

          {isRegister ? (renderRegisterForm()):(renderTable())}

          <hr className='mt-4 border-gray-300 border-2'/>
          <div className='flex justify-end mt-10'>
            <Button className='bg-red-500 hover:bg-red-700' handleClick={handleExit}>
              Sair do sistema
            </Button>
          </div>
        </div>
       </div>
      </main>
    </>
  );
}
