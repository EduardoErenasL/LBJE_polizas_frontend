import './buscador.css'

export default function Buscador ({ children, handleSubmit }) {
  return (
    <section className='search-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='container-input'>
          {children}
        </div>
        <button type='submit' className='btn btn-primary'>
          <ion-icon name='search-outline' />
        </button>
      </form>
    </section>
  )
}
