import Table from '@/components/Table';
import Head from 'next/head'


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
        <Table />
       </div>
      </main>
    </>
  );
}
