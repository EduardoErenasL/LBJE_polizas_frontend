import { useState } from 'react'

import { getPolizas } from '../services/polizas'

export const usePolizas = () => {
  const [polizas, setPolizas] = useState(null)

  const obtenerPolizas = async () => {
    try {
      const newPolizas = await getPolizas({ id: null })

      setPolizas(newPolizas)
    } catch (error) {
      setPolizas(null)
    }
  }

  const getPolizasBySearch = async ({ busqueda }) => {
    try {
      const newPolizas = await getPolizas({ id: busqueda })
      setPolizas(newPolizas)

      return true
    } catch (error) {
      setPolizas(null)
      return false
    }
  }

  return { polizas, obtenerPolizas, getPolizasBySearch }
}
