interface TitleProps {
  titleName: string
}

export default function Title({titleName}: TitleProps) {
  return (
    <h1 className='text-2xl mb-6 font-semibold'>
      {titleName}
    </h1>
  )
}
