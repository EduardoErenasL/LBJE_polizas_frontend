import { useState } from 'react'

import { getInventarios } from '../services/inventario'

export const useCatInventarios = () => {
  const [inventarios, setInventarios] = useState(null)

  const obtenerInventarios = async () => {
    try {
      const newInventarios = await getInventarios({ id: null })

      setInventarios(newInventarios)
    } catch (error) {
      setInventarios(null)
    }
  }

  return { inventarios, obtenerInventarios }
}
