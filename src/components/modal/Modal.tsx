import { useState, useEffect } from 'react'
import './modal.scss'

interface IProps {
  active: boolean
  id: string
  children: React.ReactNode
}

export default function Modal(props: IProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}