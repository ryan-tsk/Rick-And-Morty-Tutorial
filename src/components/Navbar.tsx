import { NavLink, Link } from "react-router-dom";

const NavBar  = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to ="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>

      <style jsx="true">{`
        button[aria-expanded="false"] > .close {
          display: none;
        }
        button[aria-expanded="true"] > .open {
          display: none;
        }
      `}</style>
      </div>
    </nav>
  )
}

export default NavBar