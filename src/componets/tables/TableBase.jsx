import './table-base.css'

export default function TableBase ({ children, alias, heads }) {
  return (
    <table className='table-base'>
      <thead>
        <tr>
          {
            heads && heads.map((head, index) => {
              return (
                <th key={`${alias}-${index}-${head}`}>{head}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {children && children}
      </tbody>
    </table>
  )
}
