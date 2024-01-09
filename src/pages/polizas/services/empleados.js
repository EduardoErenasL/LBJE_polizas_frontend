const API_EMPLEADOS = 'https://crud-polizas-faltantes-production.up.railway.app/empleados'

export const getEmpleados = async ({ id }) => {
  try {
    const response = await fetch(`${API_EMPLEADOS}`)
    const json = await response.json()

    return json.map(empleado => (
      {
        id: empleado.id,
        nombre: empleado.nombre,
        apellido: empleado.apellido
      }
    ))
  } catch (error) {
    throw new Error('Error al obtener los empleados')
  }
}
