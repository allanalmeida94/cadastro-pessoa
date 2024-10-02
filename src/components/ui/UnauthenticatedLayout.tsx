import Link from "next/link";
import { ReactElement } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { fredoka } from "../../../public/fonts";

export default function UnauthenticatedLayout({children}: {children: ReactElement}) {
  return (
    <>
      <header className="flex h-20 justify-center items-center border-b shadow-md">
        <div className="w-full max-w-[1200px]">
          <Link href="/" className="flex w-max">
            <span className="flex items-center w-max text-blue-700">
              <FaPeopleGroup size={40} />
               <h1 className={`ml-3 text-3xl font-bold ${fredoka.className}`}>Cadastro Soft</h1>
            </span>
          </Link>
        </div>
      </header>
      {children}
    </>
  )
}
