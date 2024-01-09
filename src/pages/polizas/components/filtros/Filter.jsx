import Buscador from '../../../../componets/buscador/Buscador'
import { useFilterPolizas } from '../../hooks/useFilterPolizas'

export default function Filter () {
  const { busqueda, handleChange, handleSubmit } = useFilterPolizas()

  return (
    <Buscador handleSubmit={handleSubmit}>
      <input type='number' name='buscador' className='control' value={busqueda} onChange={handleChange} />
    </Buscador>
  )
}
