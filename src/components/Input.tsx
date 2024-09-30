import { HTMLInputTypeAttribute } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

type InputProps = {
  label: string
  type: HTMLInputTypeAttribute | undefined
  error?: string
  register: UseFormRegisterReturn
}

export default function Input({label, type, error, register, ...rest}: InputProps) {

  return (
    <div className='flex flex-col py-3'>
      <label className='mb-1 text-xl font-semibold'>{label}</label>
      <input
        {...register}
        {...rest}
        type={type}
        className={`p-2 rounded-md text-lg border border-gray-300
        outline-none focus:border-blue-500`}/>
        {error &&
          <span className="text-red-500 text-md mt-1">
              {error}
          </span>
        }
    </div>
  )
}
