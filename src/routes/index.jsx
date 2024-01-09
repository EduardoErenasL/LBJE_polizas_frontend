import Home from '../pages/home'
import Empleado from '../pages/empleado'
import Inventario from '../pages/inventario'
import { routesPolizas } from '../pages/polizas/routes'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  ...routesPolizas,
  {
    path: '/inventario',
    element: <Inventario />
  },
  {
    path: '/empleado',
    element: <Empleado />
  }
]

export default routes
