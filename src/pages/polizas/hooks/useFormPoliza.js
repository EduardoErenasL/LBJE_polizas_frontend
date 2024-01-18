import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { PolizasContex } from '../contex/polizas.jsx'
import { postPoliza, updatePoliza } from '../services/polizas'

export const useFormPoliza = (poliza) => {
  const { closeAddPoliza, obtenerPolizas } = useContext(PolizasContex)
  const [empleado, setEmpleado] = useState(poliza?.empleado ? poliza.empleado : '-1')
  const [inventario, setInventario] = useState(poliza?.inventario ? poliza.inventario : '')
  const [cantidad, setCantidad] = useState(poliza?.cantidad != null ? poliza.cantidad : '')
  const [fecha, setFecha] = useState(poliza?.fecha ? poliza.fecha : '')
  const [showLoad, setShowLoad] = useState(false)
  const [errorEmpleado, setErrorEmpleado] = useState({
    error: '',
    show: false
  })
  const [errorInventario, setErrorInventario] = useState({
    error: '',
    show: false
  })
  const [errorCantidad, setErrorCantidad] = useState({
    error: '',
    show: false
  })
  const [errorFecha, setErrorFecha] = useState({
    error: '',
    show: false
  })

  const alerta = withReactContent(Swal)

  const closeModal = () => {
    closeAddPoliza()
  }

  const handleChangeEmpleado = (event) => {
    const newValue = event.target.value

    setEmpleado(newValue)

    validEmpleado(newValue)
  }

  const handleChangeInventario = (event) => {
    const newValue = event.target.value

    setInventario(newValue)
    validInventario(newValue)
  }

  const handleChangeCantidad = (event) => {
    const newValue = event.target.value

    setCantidad(newValue)

    validCantidad(newValue)
  }

  const handleChangeFecha = (event) => {
    const newValue = event.target.value

    setFecha(newValue)

    validFecha(newValue)
  }

  const validEmpleado = (empleadoReq) => {
    let valid = true
    let empleadoValidar = empleadoReq

    const newErrores = {
      ...errorEmpleado
    }

    if (!empleadoReq) {
      empleadoValidar = empleado
    }

    if (empleadoValidar === '' || empleadoValidar === '-1') {
      newErrores.error = 'Seleccione el nombre del empleado'
      newErrores.show = true
      valid = false
    } else {
      newErrores.error = ''
      newErrores.show = false
    }

    setErrorEmpleado(newErrores)

    return valid
  }

  const validInventario = (inventarioReq) => {
    let valid = true
    let inventarioValidar = inventarioReq

    const newErrores = {
      ...errorInventario
    }

    if (!inventarioReq) {
      inventarioValidar = inventario
    }

    if (inventarioValidar === '' || inventarioValidar === '-1') {
      newErrores.error = 'Seleccione el inventario'
      newErrores.show = true
      valid = false
    } else {
      newErrores.error = ''
      newErrores.show = false
    }

    setErrorInventario(newErrores)

    return valid
  }

  const validCantidad = (cantidadReq) => {
    let valid = true
    let cantidadValidar = cantidadReq

    const newErrores = {
      ...errorCantidad
    }

    if (!cantidadReq) {
      cantidadValidar = cantidad
    }

    console.log(cantidadValidar)

    if (cantidadValidar === '' || +cantidadValidar <= 0) {
      newErrores.error = 'Ingrese la cantidad'
      newErrores.show = true
      valid = false
    } else {
      newErrores.error = ''
      newErrores.show = false
    }

    setErrorCantidad(newErrores)

    return valid
  }

  const validFecha = (fechaReq) => {
    let valid = true
    let fechaValidar = fechaReq

    const newErrores = {
      ...errorFecha
    }

    if (!fechaReq) {
      fechaValidar = fecha
    }

    if (fechaValidar === '') {
      newErrores.error = 'Seleccione la fecha'
      newErrores.show = true
      valid = false
    } else {
      newErrores.error = ''
      newErrores.show = false
    }

    setErrorFecha(newErrores)

    return valid
  }

  const validForm = () => {
    let valid = true

    if (
      !validEmpleado() |
      !validInventario() |
      !validCantidad() |
      !validFecha()
    ) {
      valid = false
    }

    return valid
  }

  const handleSubmitForm = async () => {
    try {
      setShowLoad(true)

      if (validForm()) {
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
      } else {
        setShowLoad(false)

        return false
      }
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
    errorEmpleado,
    inventario,
    errorInventario,
    cantidad,
    errorCantidad,
    fecha,
    errorFecha,
    closeModal,
    handleChangeEmpleado,
    handleChangeInventario,
    handleChangeCantidad,
    handleChangeFecha,
    handleSubmitForm,
    showLoad
  }
}
