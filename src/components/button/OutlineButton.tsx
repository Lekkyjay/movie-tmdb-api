import Button from './Button'

interface IProps {
  className?: string
  onClick?:() => void
  children: React.ReactNode
}

export default function OutlineButton(props: IProps) {
  return (
    <Button className={`btn-outline ${props.className}`} onClick={props.onClick}>
      {props.children}
    </Button>
  )
}