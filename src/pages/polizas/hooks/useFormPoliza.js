import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { PolizasContex } from '../contex/polizas.jsx'
import { postPoliza, updatePoliza } from '../services/polizas'

export const useFormPoliza = (poliza) => {
  const { closeAddPoliza, obtenerPolizas } = useContext(PolizasContex)
  const [empleado, setEmpleado] = useState(poliza?.empleado ? poliza.empleado : '')
  const [inventario, setInventario] = useState(poliza?.inventario ? poliza.inventario : '')
  const [cantidad, setCantidad] = useState(poliza?.cantidad != null ? poliza.cantidad : '')
  const [fecha, setFecha] = useState(poliza?.fecha ? poliza.fecha : '')
  const [showLoad, setShowLoad] = useState(false)

  const alerta = withReactContent(Swal)

  const closeModal = () => {
    closeAddPoliza()
  }

  const handleChangeEmpleado = (event) => {
    const newValue = event.target.value

    setEmpleado(newValue)
  }

  const handleChangeInventario = (event) => {
    const newValue = event.target.value

    setInventario(newValue)
  }

  const handleChangeCantidad = (event) => {
    const newValue = event.target.value

    setCantidad(newValue)
  }

  const handleChangeFecha = (event) => {
    const newValue = event.target.value

    setFecha(newValue)
  }

  const handleSubmitForm = async () => {
    try {
      setShowLoad(true)

      const newPoliza = {
        empleado: +empleado,
        idInventario: +inventario,
        cantidad: +cantidad,
        fecha
      }

      if (poliza) {
        newPoliza.id = poliza.id

        await updatePoliza({ poliza: newPoliza })
      } else {
        await postPoliza({ poliza: newPoliza })
      }

      await obtenerPolizas()

      setShowLoad(false)
      closeModal()

      alerta.fire({
        text: `¡Poliza ${poliza ? 'actualizada' : 'creada'} correctamente!`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })

      return true
    } catch (error) {
      alerta.fire({
        text: `Se presento un problema al ${poliza ? 'actualizadar' : 'crear'} la poliza, ¡intente de nuevo!`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        setShowLoad(false)
      })

      return false
    }
  }

  return {
    empleado,
    inventario,
    cantidad,
    fecha,
    closeModal,
    handleChangeEmpleado,
    handleChangeInventario,
    handleChangeCantidad,
    handleChangeFecha,
    handleSubmitForm,
    showLoad
  }
}
