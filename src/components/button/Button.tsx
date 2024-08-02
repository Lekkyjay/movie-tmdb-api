import './button.scss'

interface IProps {
  className?: string
  onClick?:() => void
  children: React.ReactNode
}

export default function Button(props: IProps) {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}