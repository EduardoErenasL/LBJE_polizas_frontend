const API_INVENTARIO = import.meta.env.VITE_API_INVENTARIOS

const HEADER_BASE_INVENTARIO = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json'
}

export const getInventarios = async ({ id }) => {
  try {
    const response = await fetch(`${API_INVENTARIO}${id ? `/${id}` : ''}`, {
      headers: {
        ...HEADER_BASE_INVENTARIO
      },
      mode: 'cors'
    })

    if (response.ok) {
      const json = await response.json()

      if (Array.isArray(json)) {
        return json.map(articulo => ({
          id: articulo.id,
          articulo: articulo.idArticulo
        }))
      } else {
        return [{
          id: json.id,
          articulo: json.idArticulo
        }]
      }
    }

    return null
  } catch (error) {
    throw new Error('Error al obtener las inventarios')
  }
}
