import NavLink from "./NavLink"

export default function NavBar() {

  return (
    <nav className=" sticky mx-auto flex w-full max-w-2xl flex-row items-center justify-start px-5 ">
      <div className="flex flex-row items-center gap-x-4">
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/blogs">Blog</NavLink>
        <NavLink href="/tweet">Tweets</NavLink>
      </div>
    </nav>
  )
}
