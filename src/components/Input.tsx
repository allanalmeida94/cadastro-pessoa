interface InputProps {
  labelName?: string,
  nameInput: string,
  typeInput: string,
  classNameInput?: string
}

export default function Input({labelName, nameInput, typeInput, classNameInput}: InputProps) {
  return (
    <div className='flex flex-col py-3'>
      <label className='mb-1 text-xl font-semibold'>{labelName}</label>
      <input type={typeInput} name={nameInput} className={`p-2 rounded-md text-lg border border-gray-900
        focus:outline-none focus:bg-white focus:border focus:border-blue-500 ${classNameInput}`}/>
    </div>
  )
}
