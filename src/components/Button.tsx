type ButtonProps = {
  text: string,
  backgroundColor?: string,
  type?: "submit" | "reset" | "button" | undefined
  className?: string,
  handleClick?: () => void,
  disabled?: boolean
}

export default function Button({text, type, backgroundColor, className, handleClick, ...props}: ButtonProps) {
  return (
    <button  {...props} onClick={handleClick} type={type} className={`px-4 py-2 rounded-md text-xl ${backgroundColor ? backgroundColor : 'bg-slate-500'} ${className}`}>
      {text}
    </button>
  )
}
