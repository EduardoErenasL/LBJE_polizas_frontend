import { useState, useContext } from 'react'

import { PolizasContex } from '../contex/polizas'

export const useFilterPolizas = () => {
  const { getPolizasBySearch, setShowLoadTable } = useContext(PolizasContex)
  const [busqueda, setBusqueda] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setShowLoadTable(true)

    await getPolizasBySearch({ busqueda })

    setShowLoadTable(false)
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    setBusqueda(newValue)
  }

  return { busqueda, handleChange, handleSubmit }
}
