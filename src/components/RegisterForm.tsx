import Input from './Input';


export default function RegisterForm() {

  return (
    <form className='bg-neutral-300 px-6 py-6 rounded-md'>
      <Input labelName='Nome' typeInput='text' nameInput='name' classNameInput=''/>
      <Input labelName='CPF' typeInput='text' nameInput='cpf' classNameInput='w-36'/>
      <Input labelName='Idade' typeInput='number' nameInput='age' classNameInput='w-20' />
      <div className='flex flex-col pb-4'>
        <label className='mb-1 text-xl font-semibold'>Sexo</label>
        <select className='text-lg p-2 border  border-black rounded-md w-32'>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
      </div>
    </form>
  )
}
