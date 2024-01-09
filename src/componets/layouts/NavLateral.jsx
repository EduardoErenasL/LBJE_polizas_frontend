import { NavLink } from 'react-router-dom'

import polizas from '../../assets/image/menu/polizas_blanco.svg'
import inventario from '../../assets/image/menu/inventario_blanco.svg'
import empleado from '../../assets/image/menu/empleado_blanco.svg'

import './nav-lateral.css'

export default function NavLateral () {
  return (
    <nav className='lateral-menu'>
      <ul>
        <li>
          <NavLink to='/polizas'>
            <img src={polizas} alt='logo polizas' />
            <span>Polizas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/inventario'>
            <img src={inventario} alt='logo inventario' />
            <span>Inventario</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/empleado'>
            <img src={empleado} alt='logo empleado' />
            <span>Empleado</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
