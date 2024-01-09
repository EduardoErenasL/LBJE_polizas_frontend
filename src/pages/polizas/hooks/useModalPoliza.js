import { useState } from 'react'

export const useModalPoliza = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [polizaSelected, setPolizaSelected] = useState(null)

  const activedAddPoliza = () => {
    setPolizaSelected(null)
    setShowAdd(true)
  }

  const closeAddPoliza = () => {
    setPolizaSelected(null)
    setShowAdd(false)
  }

  const activedEditPoliza = (poliza) => {
    setPolizaSelected(poliza)
    setShowAdd(true)
  }

  return { showAdd, polizaSelected, activedAddPoliza, closeAddPoliza, activedEditPoliza }
}
