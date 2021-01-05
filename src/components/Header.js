import { Link } from "react-router-dom"

const NavList = ({to, children}) => {
  return <li className="list-none">
    <Link to={to} className="text-lg text-gray-500 hover:text-black px-4 py-2 uppercase">{children}</Link>
  </li>
}

const Header = () =>{
  return <header className="p-4 bg-gray-100 shadow">
    <nav className="flex flex-row space-x-2">
      <NavList to="/">main</NavList>
      <NavList to="/blog">blog</NavList>
    </nav>
  </header>
}

export default Header;