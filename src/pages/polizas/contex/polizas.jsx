import { createContext } from 'react'
import { usePolizas } from '../hooks/usePolizas.js'
import { useModalPoliza } from '../hooks/useModalPoliza.js'
import { useDeleteModalPoliza } from '../hooks/useDeleteModalPoliza.js'

export const PolizasContex = createContext()

export function PolizasProvider ({ children }) {
  const { showAdd, polizaSelected, activedAddPoliza, closeAddPoliza, activedEditPoliza } = useModalPoliza()
  const { polizas, obtenerPolizas, getPolizasBySearch } = usePolizas()
  const { showDeleteModal, polizaDeleteSelected, activeDeleteModal, deactiveDeleteModal } = useDeleteModalPoliza()

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
        deactiveDeleteModal
      }}
    >
      {children}
    </PolizasContex.Provider>
  )
}
