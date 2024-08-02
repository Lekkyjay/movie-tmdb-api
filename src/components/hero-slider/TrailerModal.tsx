import { useRef } from 'react'
import Modal from '../modal/Modal'
import ModalContent from '../modal/ModalContent'

interface IProps {
  item: {
    id: string
  }
}

export default function TrailerModal(props: IProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const item = props.item

  const onClose = () => iframeRef.current?.setAttribute('src', '')

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
      </ModalContent>
    </Modal>
  )
}