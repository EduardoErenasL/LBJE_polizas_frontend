import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useContext, useState } from 'react'
import { PolizasContex } from '../../contex/polizas'
import { deletePoliza } from '../../services/polizas'

export const useConfirmationDelete = ({ identificador }) => {
  const [showLoad, setShowLoad] = useState(false)
  const { deactiveDeleteModal, obtenerPolizas } = useContext(PolizasContex)
  const alerta = withReactContent(Swal)

  const handleClickAcept = async () => {
    try {
      setShowLoad(true)
      await deletePoliza({ id: identificador })
      await obtenerPolizas()

      setShowLoad(false)
      deactiveDeleteModal()

      alerta.fire({
        text: '¡Poliza eliminada correctamente!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    } catch (e) {
      setShowLoad(false)
      deactiveDeleteModal()

      alerta.fire({
        text: 'Se presento un problema al eliminar tu poliza, ¡intente de nuevo!',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  }

  return { deactiveDeleteModal, handleClickAcept, showLoad }
}
