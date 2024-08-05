import { NavLink } from "react-router-dom";

import { useAuthentication } from "./../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import style from "./NavBar.module.css";

const NavBar = () => {
  const { logout } = useAuthentication()
  const { user } = useAuthValue();

  return (
    <nav className={style.navbar}>
      <NavLink className={style.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Home
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Cadastrar
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                to="/posts/create"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                Novo Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? style.active : "")}
              >
                DashBoard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
