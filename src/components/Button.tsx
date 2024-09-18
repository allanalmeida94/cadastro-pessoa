import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  handleClick: () => void
}

export default function Button({children, className, handleClick}: ButtonProps) {
  return (
    <button className={`px-4 py-2 rounded-md text-white text-xl ${className}`} onClick={handleClick}>
      {children}
    </button>
  )
}
