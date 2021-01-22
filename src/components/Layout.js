import { Link } from "react-router-dom"
import logo from '../logo.svg';

const NavLink = ({to, children}) => {
  return <li className="list-none">
    <Link to={to} className="text-2xl font-mono px-4 py-2 uppercase">{children}</Link>
  </li>
}

const Header = () =>{
  return <header className="p-2 shadow bg-white">
    <div className="lg:container mx-auto flex justify-center items-center">
      <img src={logo} alt="react" style={{height: 60}} />
      <nav className="flex-1 flex flex-row space-x-4">
        <NavLink to="/">Main</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </div>
  </header>
}

const Footer = () => {
  return <footer className="w-full bg-gray-100">
    <div className="lg:container mx-auto px-5 py-4 text-center">
      footer.
    </div>
  </footer>
}

const Layout = ({children}) => {
  return <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
}

export default Layout;
