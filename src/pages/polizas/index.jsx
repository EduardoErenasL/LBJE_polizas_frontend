import Polizas from './Polizas.jsx'
import { PolizasProvider } from './contex/polizas.jsx'

export default function Index () {
  return (
    <PolizasProvider>
      <Polizas />
    </PolizasProvider>
  )
}
