import { useEffect } from 'react'

import Modal from '../../../../componets/modals/Modal.jsx'
import GroupControl from '../../../../componets/forms/GroupControl.jsx'

import { useFormPoliza } from '../../hooks/useFormPoliza.js'
import { useCatEmpleados } from '../../hooks/useCatEmpleados.js'
import { useCatInventarios } from '../../hooks/useCatInventarios.js'

import LoadBars from '../../../../componets/loads/LoadBars.jsx'

import './add-poliza.css'

export default function AddPoliza ({ poliza }) {
  const configModalAdd = {
    title: poliza ? 'Modificar poliza' : 'Agregar poliza',
    titleAbort: 'Cancelar',
    titleAcept: 'Agregar'
  }

  const {
    empleado, errorEmpleado, inventario, errorInventario, cantidad, errorCantidad, fecha, errorFecha, closeModal,
    handleChangeEmpleado, handleChangeInventario, handleChangeCantidad, handleChangeFecha, handleSubmitForm,
    showLoad
  } = useFormPoliza(poliza)

  const { empleados, obtenerEmpleados } = useCatEmpleados()

  const { inventarios, obtenerInventarios } = useCatInventarios()

  useEffect(() => {
    obtenerEmpleados()
    obtenerInventarios()
  }, [])

  return (

    <>
      {!showLoad &&
        <Modal config={configModalAdd} close={closeModal} abort={closeModal} acept={handleSubmitForm}>
          <main className='container-add'>
            <form onSubmit={handleSubmitForm}>
              <GroupControl label='Empleado' error={errorEmpleado.error} flagError={errorEmpleado.show}>
                <select name='empleadoPoliza' className='control' value={empleado} onChange={handleChangeEmpleado}>
                  <option value='-1' disabled>Seleccionar empleado</option>
                  {empleados && empleados.map((empleado) => {
                    return (
                      <option key={empleado.id} value={empleado.id}>{`${empleado.nombre} ${empleado.apellido}`}</option>
                    )
                  })}
                </select>
              </GroupControl>

              <GroupControl label='Inventario' error={errorInventario.error} flagError={errorInventario.show}>
                <select name='inventarioPoliza' className='control' value={inventario} onChange={handleChangeInventario}>
                  <option value='-1'>Seleccionar empleado</option>
                  {inventarios && inventarios.map((inventario) => {
                    return (
                      <option key={inventario.id} value={inventario.id}>{`${inventario.id} - Articulo: ${inventario.articulo}`}</option>
                    )
                  })}
                </select>
              </GroupControl>

              <GroupControl label='Cantidad' error={errorCantidad.error} flagError={errorCantidad.show}>
                <input
                  type='number' name='cantidadPoliza' value={cantidad} onChange={handleChangeCantidad}
                  className='control' placeholder='Ingrese Cantidad'
                />
              </GroupControl>

              <GroupControl label='Fecha' error={errorFecha.error} flagError={errorFecha.show}>
                <input
                  type='date' name='fechaPoliza' value={fecha} onChange={handleChangeFecha}
                  className='control' placeholder='Ingrese Fecha'
                />
              </GroupControl>

            </form>
          </main>
        </Modal>}

      {showLoad && <LoadBars />}
    </>
  )
}
