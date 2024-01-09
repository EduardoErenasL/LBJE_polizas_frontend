// const API_POLIZAS = 'http://10.59.29.9:9000/polizas'
const API_POLIZAS = import.meta.env.VITE_API_POLIZAS

console.log(import.meta.env.VITE_API_POLIZAS)

const HEADER_BASE = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json'
}

export const getPolizas = async ({ id }) => {
  try {
    const response = await fetch(`${API_POLIZAS}${id ? `/${id}` : ''}`, {
      headers: {
        ...HEADER_BASE
      },
      mode: 'cors'
    })

    if (response.ok) {
      const json = await response.json()

      if (Array.isArray(json)) {
        return json.map(poliza => ({
          id: poliza.id,
          empleado: poliza.empleado,
          inventario: poliza.idInventario,
          cantidad: poliza.cantidad,
          fecha: poliza.fecha
        }))
      } else {
        return [{
          id: json.id,
          empleado: json.empleado,
          inventario: json.idInventario,
          cantidad: json.cantidad,
          fecha: json.fecha
        }]
      }
    }

    return null
  } catch (error) {
    throw new Error('Error al obtener las polizas')
  }
}

export const postPoliza = async ({ poliza }) => {
  try {
    const response = await fetch(`${API_POLIZAS}/insertarPoliza`, {
      method: 'POST',
      body: JSON.stringify(poliza),
      headers: {
        ...HEADER_BASE
      },
      mode: 'cors'
    })

    const json = await response.json()

    return json
  } catch (error) {
    throw new Error('Error al crear poliza')
  }
}

export const updatePoliza = async ({ poliza }) => {
  try {
    const response = await fetch(`${API_POLIZAS}/update`, {
      method: 'PUT',
      body: JSON.stringify(poliza),
      headers: {
        ...HEADER_BASE
      },
      mode: 'cors'
    })

    const json = await response.json()

    return json
  } catch (error) {
    throw new Error('Error al actualizar poliza')
  }
}

export const deletePoliza = async ({ id }) => {
  try {
    const response = await fetch(`${API_POLIZAS}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        ...HEADER_BASE
      },
      mode: 'cors'
    })

    const json = await response.json()

    return json
  } catch (error) {
    throw new Error('Error al eliminar poliza')
  }
}
