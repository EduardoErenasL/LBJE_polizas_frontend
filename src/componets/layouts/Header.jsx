import logo from '../../assets/logo.svg'
import user from '../../assets/image/user.svg'

import './header.css'

export default function Header () {
  return (
    <header className='wrapper-header'>
      <section className='logo'>
        <img src={logo} alt='logo' />
      </section>
      <section className='usuario'>
        <p>Nombre Usuario</p>
        <img src={user} alt='usuario' />
      </section>
    </header>
  )
}
