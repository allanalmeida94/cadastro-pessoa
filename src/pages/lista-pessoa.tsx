import Table from "@/components/Table";
import MainLayout from "@/components/ui/MainLayout";

export default function ListaPessoa() {

  return (
    <MainLayout>
      <div className="flex flex-col w-full h-full p-5">
        <h1 className="text-2xl font-bold">Pessoas Cadastradas</h1>
        <div className="flex mt-10">
          <Table />
        </div>
      </div>
    </MainLayout>
  )

}
