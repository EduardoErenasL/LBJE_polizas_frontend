import { useState } from 'react'

import { getEmpleados } from '../services/empleados'

export const useCatEmpleados = () => {
  const [empleados, setEmpleados] = useState(null)

  const obtenerEmpleados = async () => {
    try {
      const newEmpleados = await getEmpleados({ id: null })

      setEmpleados(newEmpleados)
    } catch (error) {
      setEmpleados(null)
    }
  }

  return { empleados, obtenerEmpleados }
}
