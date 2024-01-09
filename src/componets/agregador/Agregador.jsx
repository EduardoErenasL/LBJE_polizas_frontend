import './agregador.css'

export default function Agregador ({ handleClickAdd }) {
  const handleClick = () => {
    handleClickAdd()
  }

  return (
    <section className='activar-add'>
      <button className='btn btn-primary' onClick={handleClick}>
        <ion-icon name='duplicate-outline' />
      </button>
    </section>
  )
}
