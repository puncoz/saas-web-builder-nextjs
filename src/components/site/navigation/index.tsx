import logoImg from "@/assets/images/haami-dev-logo.svg"
import ThemeToggle from "@/components/global/theme-toggle"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { FunctionComponent } from "react"

const SiteNavigation: FunctionComponent = () => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src={logoImg} alt="haami.dev logo" width={40} height={40}/>
        <span className="text-xl font-bold">Haami.Dev</span>
      </aside>

      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>

      <aside className="flex gap-2 items-center">
        <Link href={"/agency"}
              className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80">
          Login
        </Link>

        <UserButton/>
        <ThemeToggle/>
      </aside>
    </div>
  )
}

export default SiteNavigation
