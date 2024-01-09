import './layout-menu.css'

import Header from './Header.jsx'
import NavLateral from './NavLateral.jsx'
import MainContent from './MainContent.jsx'

export default function LayoutMenu ({ children }) {
  return (
    <section className='wrapper-layout'>
      <Header />
      <NavLateral />
      <MainContent>
        {children && children}
      </MainContent>
    </section>
  )
}
