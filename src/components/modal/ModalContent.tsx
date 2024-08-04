import { useRef } from 'react'
import './modal.scss'

interface IProps {
  onClose:() => void
  children: React.ReactNode
}

export default function ModalContent(props: IProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    (contentRef.current?.parentNode as HTMLDivElement).classList.remove('active')
    if (props.onClose) props.onClose()
  }

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  )
}