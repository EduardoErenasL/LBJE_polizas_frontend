import Modal from '../../../../componets/modals/Modal'
import LoadBars from '../../../../componets/loads/LoadBars'

import { useConfirmationDelete } from '../../hooks/delete/useConfirmationDelete'
import './eliminar-poliza.css'

export default function EliminarPoliza ({ show, identificador }) {
  if (!show) {
    return null
  }

  const { deactiveDeleteModal, handleClickAcept, showLoad } = useConfirmationDelete({ identificador })

  const configModalDelete = {
    title: 'Confirmación',
    titleAbort: 'Cancelar',
    titleAcept: 'Aceptar'
  }

  return (
    <>
      {!showLoad &&
        <Modal config={configModalDelete} close={deactiveDeleteModal} abort={deactiveDeleteModal} acept={handleClickAcept}>
          <section className='wrapper-confirmation'>
            <p className='message'>¿Esta seguro que desea eliminar la poliza {identificador && identificador}?</p>
          </section>
        </Modal>}
      {showLoad && <LoadBars />}
    </>
  )
}
