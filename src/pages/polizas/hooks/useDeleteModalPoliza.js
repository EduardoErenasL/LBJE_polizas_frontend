import { useState } from 'react'

export const useDeleteModalPoliza = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [polizaDeleteSelected, setPolizaDeleteSelected] = useState(false)

  const activeDeleteModal = ({ poliza }) => {
    setPolizaDeleteSelected(poliza)
    setShowDeleteModal(true)
  }

  const deactiveDeleteModal = () => {
    setPolizaDeleteSelected(null)
    setShowDeleteModal(false)
  }

  return {
    showDeleteModal,
    polizaDeleteSelected,
    activeDeleteModal,
    deactiveDeleteModal
  }
}
