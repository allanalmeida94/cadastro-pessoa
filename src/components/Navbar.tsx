import Link from "next/link"
import { ReactElement } from "react"
import { FaRegListAlt } from "react-icons/fa"
import { FaRegUser, FaUsersRectangle } from "react-icons/fa6"

type linksProps = {
  id: number,
  name: string,
  href: string,
  icon: ReactElement
}[]

const links: linksProps = [
  {id: 1, name: "Cadastrar pessoa", href: '/cadastra-pessoa', icon: <FaRegUser size={20} />},
  {id: 2, name: "Pessoas Cadastradas", href: '/lista-pessoa', icon: <FaRegListAlt size={20}/> },
  {id: 3, name: "Usuários", href: '/usuarios', icon: <FaUsersRectangle size={20}/> },
]



export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col">
        {links.map((link) => (
          <Link key={link.id} href={link.href} className="flex justify-start items-center px-4 py-2 text-lg mt-2 hover:bg-gray-100">
            <span className="mr-2">
              {link.icon}
            </span>
            <span className="mr-2">
              {link.name}
            </span>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
