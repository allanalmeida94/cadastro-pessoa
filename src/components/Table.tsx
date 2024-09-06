import Button from './Button';

export default function Table() {
  return (
    <div className='flex flex-col w-2/3 p-4 bg-white rounded-xl'>
      <h1 className='text-2xl mb-6 font-semibold'>
        Sistema para cadastro de pessoas
      </h1>
      <hr className='mb-5 border-orange-300 border-2'/>
      <table className='w-full rounded-md overflow-hidden border'>
        <thead className='bg-orange-400'>
          <tr className='flex justify-between items-center text-lg p-2 border-b-2'>
            <th className='flex w-full'>CPF</th>
            <th className='flex w-full'>Nome</th>
            <th className='flex w-full'>idade</th>
            <th className='flex w-full'>Sexo</th>
            <th className='flex w-full'>Ação</th>
          </tr>
        </thead>
        <tbody className='mt-2'>
          <tr className='flex justify-between items-center text-lg p-2 bg-blue-300'>
            <td className='flex w-full'>123.456.789-01</td>
            <td className='flex w-full'>Allan</td>
            <td className='flex w-full'>30</td>
            <td className='flex w-full'>Masculino</td>
            <td className='flex w-full'>Editar | Excluir</td>
          </tr>
          <tr className='flex justify-between items-center text-lg p-2 bg-blue-100'>
            <td className='flex w-full'>123.456.789-01</td>
            <td className='flex w-full'>Allan</td>
            <td className='flex w-full'>30</td>
            <td className='flex w-full'>Masculino</td>
            <td className='flex w-full'>Editar | Excluir</td>
          </tr>
          <tr className='flex justify-between items-center text-lg p-2 bg-blue-300'>
            <td className='flex w-full'>123.456.789-01</td>
            <td className='flex w-full'>Allan</td>
            <td className='flex w-full'>30</td>
            <td className='flex w-full'>Masculino</td>
            <td className='flex w-full'>Editar | Excluir</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-end mt-5'>
        <Button className='px-4 py-2 bg-red-400 hover:bg-red-600 text-white text-xl rounded-lg'>
          Sair do sistema
        </Button>
      </div>
    </div>
  )
}
