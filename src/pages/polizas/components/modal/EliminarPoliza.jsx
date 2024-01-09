import { useContext } from 'react'

import Modal from '../../../../componets/modals/Modal'

import { PolizasContex } from '../../contex/polizas'
import { deletePoliza } from '../../services/polizas'

import './eliminar-poliza.css'

export default function EliminarPoliza ({ show, identificador }) {
  if (!show) {
    return null
  }

  const { deactiveDeleteModal, obtenerPolizas } = useContext(PolizasContex)

  const configModalAdd = {
    title: 'Confirmación',
    titleAbort: 'Cancelar',
    titleAcept: 'Aceptar'
  }

  const handleClickAcept = async () => {
    try {
      await deletePoliza({ id: identificador })
      await obtenerPolizas()

      deactiveDeleteModal()
    } catch (e) {
      deactiveDeleteModal()
    }
  }

  return (
    <Modal config={configModalAdd} close={deactiveDeleteModal} abort={deactiveDeleteModal} acept={handleClickAcept}>
      <section className='wrapper-confirmation'>
        <p className='message'>¿Esta seguro que desea eliminar la poliza {identificador && identificador}?</p>
      </section>
    </Modal>
  )
}
