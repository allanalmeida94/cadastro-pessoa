import Button from './Button';
import { Person } from './types';

interface TableProps {
  mockData: Person[];
}

export default function Table({mockData}: TableProps) {

  function renderHeader() {
    return (
      <tr className='text-xl h-10'>
        <th>CPF</th>
        <th>Nome</th>
        <th>idade</th>
        <th>Sexo</th>
        <th>Ação</th>
      </tr>
    )
  }

  function renderData() {
    return mockData.map((person, index) => (
      <tr key={person.cpf} className={`${index % 2 === 0 ? 'bg-green-100' : ''} text-lg`}>
        <td className='border-r-2 pl-2 text-center'>{person.cpf}</td>
        <td className='border-r-2 pl-2'>{person.name}</td>
        <td className='border-r-2 pl-2'>{person.age}</td>
        <td className='border-r-2 pl-2'>{person.gender}</td>
        <td className='pl-2 text-center'>ação</td>
      </tr>
    ))
  }

  return (
    <div className='flex flex-col w-2/3 p-4 bg-white rounded-xl'>
      <h1 className='text-2xl mb-6 font-semibold'>
        Sistema para cadastro de pessoas
      </h1>
      <hr className='mb-5 border-blue-300 border-2'/>
      <div className='flex justify-end mb-5'>
        <Button className='max-w-max px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white'>
          Novo cadastro
        </Button>
      </div>
      <table className='w-full rounded-md overflow-hidden border'>
        <thead className='bg-blue-400'>
          {renderHeader()}
        </thead>
        <tbody className='mt-2'>
          {renderData()}
        </tbody>
      </table>
      <hr className='mt-4 border-gray-300 border-2'/>
      <div className='flex justify-end mt-4'>
        <Button className='px-4 py-2 bg-red-500 hover:bg-red-700 text-white text-xl rounded-lg'>
          Sair do sistema
        </Button>
      </div>
    </div>
  )
}
