import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded ${isActive ? "bg-gray-200" : "hover:bg-gray-100"}`;

  return (
    <div className="min-h-screen font-sans">
      <header className="border-b">
        <div className="container">
          <Link to="/" className="title">Chame CRUD</Link>
          <nav className="nav">
            <NavLink to="/people" className={navClass}>People</NavLink>
            <NavLink to="/chame" className={navClass}>Chame</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
