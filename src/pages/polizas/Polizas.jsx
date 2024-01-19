import { useContext, useEffect } from 'react'

import LayoutMenu from '../../componets/layouts/LayoutMenu.jsx'
import Filtrer from './components/filtros/Filter.jsx'
import Agregador from '../../componets/agregador/Agregador.jsx'
import TableBase from '../../componets/tables/TableBase.jsx'
import AddPoliza from './components/modal/AddPoliza.jsx'
import EliminarPoliza from './components/modal/EliminarPoliza.jsx'

import RowTablePoliza from './components/tables/RowTablePoliza.jsx'
import { PolizasContex } from './contex/polizas.jsx'

import LoadBars from '../../componets/loads/LoadBars.jsx'

import './polizas.css'

const HEADS_GENERAL_POLIZAS = ['ID', 'Empleado', 'Inventario', 'Cantidad', 'Fecha', 'Opciones']

const SinResultados = ({ mensaje }) => {
  return (
    <div className='sin-resultados'>
      <p>{mensaje} </p>
    </div>
  )
}

export default function Polizas () {
  const { polizas, obtenerPolizas, showAdd, polizaSelected, activedAddPoliza, showDeleteModal, polizaDeleteSelected, showLoadTable } = useContext(PolizasContex)

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
        {!polizas && <SinResultados mensaje='Sin resultados en la busqueda' />}
      </section>

      <Agregador handleClickAdd={showAddPolizas} />

      {showAdd && <AddPoliza poliza={polizaSelected} />}

      {showDeleteModal && <EliminarPoliza identificador={polizaDeleteSelected?.id} />}

      {showLoadTable && <LoadBars />}

    </LayoutMenu>
  )
}
