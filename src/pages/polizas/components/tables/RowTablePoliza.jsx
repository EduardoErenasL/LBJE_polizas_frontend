import { useContext } from 'react'

import OptionsTableButtons from '../../../../componets/tables/OptionsTableButtons.jsx'
import ItemOptionTable from '../../../../componets/tables/ItemOptionTable.jsx'

import { PolizasContex } from '../../contex/polizas.jsx'

export default function RowTablePoliza ({ poliza }) {
  const { activedEditPoliza, activeDeleteModal } = useContext(PolizasContex)

  const EDIT = {
    icon: 'pencil-outline',
    color: 'azul'
  }

  const REMOVE = {
    icon: 'trash-outline',
    color: 'rojo'
  }

  const editar = () => {
    activedEditPoliza(poliza)
  }

  const eliminar = () => {
    activeDeleteModal({ poliza })
  }

  return (
    <tr>
      <td>{poliza?.id}</td>
      <td>{poliza?.empleado}</td>
      <td>{poliza?.inventario}</td>
      <td>{poliza?.cantidad}</td>
      <td>{poliza?.fecha}</td>
      <td>
        <OptionsTableButtons>
          <ItemOptionTable color={EDIT.color} icon={EDIT.icon} action={editar} />
          <ItemOptionTable color={REMOVE.color} icon={REMOVE.icon} action={eliminar} />
        </OptionsTableButtons>
      </td>
    </tr>
  )
}
