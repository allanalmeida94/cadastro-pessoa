
type mockDataProps = {
  cpf: string,
  name:string,
  age: number,
  gender: string
}[]


const mockData: mockDataProps = [
  {cpf: "123.456.789-09", name: 'Allan Almeida', age: 30, gender: 'masculino'},
  {cpf: "314.456.789-09", name: 'Allan Michell', age: 20, gender: 'masculino'},
  {cpf: "223.456.789-09", name: 'Almeida', age: 23, gender: 'masculino'},
]

export default function Table() {

  function renderHeader() {
    return (
      <tr className='text-xl text-left'>
        <th className='p-2'>CPF</th>
        <th className='p-2'>Nome</th>
        <th className='p-2'>idade</th>
        <th className='p-2'>Sexo</th>
        <th className='p-2 text-center'>Ação</th>
      </tr>
    )
  }

  function renderData() {
    return mockData.map((person, index) => (
      <tr key={person.cpf} className={`${index % 2 === 0 ? 'bg-gray-100' : ''} text-lg text-left`}>
        <td className='p-2'>{person.cpf}</td>
        <td className='p-2'>{person.name}</td>
        <td className='p-2'>{person.age}</td>
        <td className='p-2'>{person.gender}</td>
        {renderActions()}
      </tr>
    ))
  }

  function renderActions() {
    return (
       <td className='flex p-2 justify-center items-center'>
          <button  className='bg-white rounded-full p-2 hover:bg-slate-200'>
            Excluir
          </button>
          <button className='bg-white rounded-full p-2 ml-3 hover:bg-slate-200'>
            Editar
          </button>
       </td>
    )
  }

  return (
      <table className='w-full rounded-md overflow-hidden border'>
        <thead className='bg-slate-300'>
          {renderHeader()}
        </thead>
        <tbody className='mt-2'>
          {renderData()}
        </tbody>
      </table>
  )
}
