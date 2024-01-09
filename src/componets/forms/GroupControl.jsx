import './group-control.css'

export default function GroupControl ({ children, label, error, flagError }) {
  return (
    <div className='group-control'>
      <label>{label}</label>
      {children}
      {flagError && <span className='error-control'>{error}</span>}
    </div>
  )
}
