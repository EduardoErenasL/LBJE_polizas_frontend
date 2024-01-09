import { useContext, useEffect } from 'react'

import LayoutMenu from '../../componets/layouts/LayoutMenu.jsx'
import Filtrer from './components/filtros/Filter.jsx'
import Agregador from '../../componets/agregador/Agregador.jsx'
import TableBase from '../../componets/tables/TableBase.jsx'
import AddPoliza from './components/modal/AddPoliza.jsx'
import EliminarPoliza from './components/modal/EliminarPoliza.jsx'

import RowTablePoliza from './components/tables/RowTablePoliza.jsx'
import { PolizasContex } from './contex/polizas.jsx'

import './polizas.css'

const HEADS_GENERAL_POLIZAS = ['ID', 'Empleado', 'Inventario', 'Cantidad', 'Fecha', 'Opciones']

export default function Polizas () {
  const { polizas, obtenerPolizas, showAdd, polizaSelected, activedAddPoliza, showDeleteModal, polizaDeleteSelected } = useContext(PolizasContex)

  const showAddPolizas = () => {
    activedAddPoliza()
  }

  useEffect(() => {
    obtenerPolizas()
  }, [])

  return (
    <LayoutMenu>
      <Filtrer />

      <section className='table-wrapper'>
        <TableBase alias='polizasGeneral' heads={HEADS_GENERAL_POLIZAS}>
          {polizas && polizas.map((poliza) => {
            return (
              <RowTablePoliza key={poliza.id} poliza={poliza} />
            )
          })}
        </TableBase>
      </section>

      <Agregador handleClickAdd={showAddPolizas} />

      <AddPoliza flagAddPoliza={showAdd} poliza={polizaSelected} />

      <EliminarPoliza show={showDeleteModal} identificador={polizaDeleteSelected?.id} />

    </LayoutMenu>
  )
}
