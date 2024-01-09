import './item-option-table.css'

export default function ItemOptionTable ({ color, icon, action }) {
  const handleClickAction = () => {
    action()
  }

  return (
    <button className={`btn btn-clean item-option-table ${color || ''}`} onClick={handleClickAction}>
      <ion-icon name={icon && icon} />
    </button>
  )
}
