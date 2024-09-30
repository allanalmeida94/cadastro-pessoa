import Button from "@/components/Button";
import UnauthenticatedLayout from "@/components/ui/UnauthenticatedLayout";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  function handleClickLogin(){
    router.push('/login')
  }

  function handleClickCadastro(){
    router.push('/cadastro')
  }

  return (
    <>
      <Head>
        <title>Cadastro pessoas</title>
        <meta name="description" content="Crud utilizando Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/user_icon.ico" />
      </Head>
      <UnauthenticatedLayout>
        <main className="flex justify-center min-h-[calc(100vh-72px)] mt-2">
          <div className="flex flex-col justify-center w-full max-w-[1200px] mb-10">
            <h1 className="text-5xl max-w-[600px] font-bold text-gray-900 mb-5 tracking-wider">
              Comece a gerenciar pessoas de forma ágil e prática
            </h1>
            <p className="text-2xl">Faça o login ou cadastre-se para acessar o sistema</p>
            <div className="mt-5 space-x-3">
              <Button handleClick={handleClickLogin} text="Entre" backgroundColor='bg-blue-500' className="text-white hover:bg-blue-600"/>
              <Button handleClick={handleClickCadastro} text="Cadastre-se" backgroundColor='bg-slate-500' className="text-white hover:bg-slate-600" />
            </div>
          </div>
        </main>
    </UnauthenticatedLayout>
    </>
  )
}
