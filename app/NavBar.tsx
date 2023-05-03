import NavLink from "./NavLink"
import { ThemeToggle } from "@components/ThemeToggle";

export default function NavBar() {
  return (
    <nav className=" sticky mx-auto flex w-full max-w-2xl flex-row items-center justify-start px-5 ">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/tweets">Tweets</NavLink>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}
