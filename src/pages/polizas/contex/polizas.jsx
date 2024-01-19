import { createContext, useState } from 'react'
import { usePolizas } from '../hooks/usePolizas.js'
import { useModalPoliza } from '../hooks/useModalPoliza.js'
import { useDeleteModalPoliza } from '../hooks/delete/useDeleteModalPoliza.js'

export const PolizasContex = createContext()

export function PolizasProvider ({ children }) {
  const { showAdd, polizaSelected, activedAddPoliza, closeAddPoliza, activedEditPoliza } = useModalPoliza()
  const { polizas, obtenerPolizas, getPolizasBySearch } = usePolizas()
  const { showDeleteModal, polizaDeleteSelected, activeDeleteModal, deactiveDeleteModal } = useDeleteModalPoliza()
  const [showLoadTable, setShowLoadTable] = useState(false)

  return (
    <PolizasContex.Provider
      value={{
        polizas,
        obtenerPolizas,
        getPolizasBySearch,
        showAdd,
        polizaSelected,
        activedEditPoliza,
        activedAddPoliza,
        closeAddPoliza,
        showDeleteModal,
        polizaDeleteSelected,
        activeDeleteModal,
        deactiveDeleteModal,
        showLoadTable,
        setShowLoadTable
      }}
    >
      {children}
    </PolizasContex.Provider>
  )
}
