import Table from '@/components/Table';
import { Person } from '@/components/types';
import Head from 'next/head'

const mockData: Person[] = [
  {cpf: 12345678901, name: "Allan", age: 30, gender: "Masculino" },
  {cpf: 21514511545, name: "João", age: 10, gender: "Masculino" },
  {cpf: 72011454245, name: "Pamela", age: 13, gender: "Feminino" },
  {cpf: 78784158484, name: "Pedro", age: 21, gender: "Masculino" },
  {cpf: 45854845845, name: "Erica", age: 33, gender: "Feminino" },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Cadastro pessoas</title>
        <meta name="description" content="Crud utilizando Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/user_icon.ico" />
      </Head>

      <main>
       <div className='flex h-screen justify-center items-center bg-slate-500'>
        <Table mockData={mockData}/>
       </div>
      </main>
    </>
  );
}
