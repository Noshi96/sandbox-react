import classes from './NavHeader.module.scss'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes['nav-list']}>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive ? classes['active-link'] : undefined}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='page-1'
              className={({ isActive }) =>
                isActive ? classes['active-link'] : undefined}
            >
              Page 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to='page-2'
              className={({ isActive }) =>
                isActive ? classes['active-link'] : undefined}
            >
              Page 2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavHeader
