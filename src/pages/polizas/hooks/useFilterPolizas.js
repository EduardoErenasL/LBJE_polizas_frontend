import { useState, useContext } from 'react'

import { PolizasContex } from '../contex/polizas'

export const useFilterPolizas = () => {
  const { getPolizasBySearch } = useContext(PolizasContex)
  const [busqueda, setBusqueda] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await getPolizasBySearch({ busqueda })
  }

  const handleChange = (e) => {
    const newValue = e.target.value
    setBusqueda(newValue)
  }

  return { busqueda, handleChange, handleSubmit }
}
