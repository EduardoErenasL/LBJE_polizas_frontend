import './modal.css'

export default function Modal ({ children, config, close, abort, acept }) {
  const handleClose = () => {
    if (close === undefined || close == null) return

    close()
  }

  const handleClickAbort = () => {
    if (abort === undefined || abort == null) return

    abort()
  }

  const handleClickAcept = () => {
    if (acept === undefined || acept == null) return

    acept()
  }

  return (
    <div className='modal'>
      <div className='mask' />
      <div className='content-modal'>
        <section className='head-modal'>
          <h2>{config?.title}</h2>
          <button className='btn btn-clean close-modal' onClick={handleClose}>
            <span>
              <ion-icon name='close-outline' />
            </span>
          </button>
        </section>
        {children && children}
        <section className='footer-modal'>
          {config?.titleAbort && <button className='btn cancelar' onClick={handleClickAbort}>{config?.titleAbort}</button>}
          {config?.titleAcept && <button className='btn btn-primary aceptar' onClick={handleClickAcept}>{config?.titleAcept}</button>}
        </section>
      </div>
    </div>
  )
}
