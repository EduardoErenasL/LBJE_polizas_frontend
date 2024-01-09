import { useEffect } from 'react'

import Modal from '../../../../componets/modals/Modal.jsx'
import GroupControl from '../../../../componets/forms/GroupControl.jsx'

import { useFormPoliza } from '../../hooks/useFormPoliza.js'
import { useCatEmpleados } from '../../hooks/useCatEmpleados.js'

import './add-poliza.css'

export default function AddPoliza ({ flagAddPoliza, poliza }) {
  if (!flagAddPoliza) {
    return null
  }

  const configModalAdd = {
    title: poliza ? 'Modificar poliza' : 'Agregar poliza',
    titleAbort: 'Cancelar',
    titleAcept: 'Agregar'
  }

  const {
    empleado, inventario, cantidad, fecha, closeModal, handleChangeEmpleado, handleChangeInventario,
    handleChangeCantidad, handleChangeFecha, handleSubmitForm
  } = useFormPoliza(poliza)

  const { empleados, obtenerEmpleados } = useCatEmpleados()

  useEffect(() => {
    obtenerEmpleados()
  }, [])

  return (
    <Modal config={configModalAdd} close={closeModal} abort={closeModal} acept={handleSubmitForm}>
      <main className='container-add'>
        <form onSubmit={handleSubmitForm}>
          <GroupControl label='Empleado' error='' flagError={false}>
            <select name='empleadoPoliza' className='control' value={empleado} onChange={handleChangeEmpleado}>
              <option value='-1'>Seleccionar empleado</option>
              {empleados && empleados.map((empleado) => {
                return (
                  <option key={empleado.id} value={empleado.id}>{`${empleado.nombre} ${empleado.apellido}`}</option>
                )
              })}
            </select>
          </GroupControl>

          <GroupControl label='Inventario' error='' flagError={false}>
            <input
              type='number' name='inventarioPoliza' value={inventario} onChange={handleChangeInventario}
              className='control' placeholder='Ingrese Inventario'
            />
          </GroupControl>

          <GroupControl label='Cantidad' error='' flagError={false}>
            <input
              type='number' name='cantidadPoliza' value={cantidad} onChange={handleChangeCantidad}
              className='control' placeholder='Ingrese Cantidad'
            />
          </GroupControl>

          <GroupControl label='Fecha' error='' flagError={false}>
            <input
              type='date' name='fechaPoliza' value={fecha} onChange={handleChangeFecha}
              className='control' placeholder='Ingrese Fecha'
            />
          </GroupControl>

        </form>
      </main>
    </Modal>
  )
}
