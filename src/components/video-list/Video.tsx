import { useEffect, useRef } from 'react'
import './video.scss'

interface IProps {
  item: IVideo
}

export default function Video(props: IProps) {
  const item = props.item

  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const height = iframeRef.current?.offsetWidth! * 9 / 16 + 'px'
    iframeRef.current?.setAttribute('height', height)
  }, [])

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        width="100%"
        title="video"
      ></iframe>
    </div>
  )
}