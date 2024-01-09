import './main-content.css'
export default function MainContent ({ children }) {
  return (
    <main>
      <section>
        {children && children}
      </section>
    </main>
  )
}
