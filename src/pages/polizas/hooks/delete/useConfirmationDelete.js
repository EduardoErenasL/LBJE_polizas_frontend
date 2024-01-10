import { useContext, useState } from 'react'
import { PolizasContex } from '../../contex/polizas'
import { deletePoliza } from '../../services/polizas'

export const useConfirmationDelete = ({ identificador }) => {
  const [showLoad, setShowLoad] = useState(false)
  const { deactiveDeleteModal, obtenerPolizas } = useContext(PolizasContex)

  const handleClickAcept = async () => {
    try {
      setShowLoad(true)
      await deletePoliza({ id: identificador })
      await obtenerPolizas()

      deactiveDeleteModal()
    } catch (e) {
      console.log(e)
      deactiveDeleteModal()
    } finally {
      setShowLoad(false)
    }
  }

  return { deactiveDeleteModal, handleClickAcept, showLoad }
}
