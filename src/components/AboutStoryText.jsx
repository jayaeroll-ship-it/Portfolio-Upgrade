import { useEffect, useState } from 'react'

export default function AboutStoryText({ paragraphs }) {
  const [count, setCount] = useState(0)
  const total = paragraphs.reduce((sum, text) => sum + text.length, 0)

  useEffect(() => {
    let position = 0
    let timer
    setCount(0)
    const tick = () => {
      position = Math.min(total, position + 1)
      setCount(position)
      if (position < total) timer = window.setTimeout(tick, 22)
    }
    timer = window.setTimeout(tick, 400)
    return () => window.clearTimeout(timer)
  }, [total])

  let offset = 0
  return (
    <div className="about-story-typing">
      {paragraphs.map((text, index) => {
        const start = offset
        offset += text.length
        const visible = Math.max(0, Math.min(text.length, count - start))
        const cursor = count < total && count >= start && count < offset
        return (
          <p key={index} className={index === 0 ? 'about-summary' : undefined}>
            <span className="about-readable-text">{text}</span>
            <span aria-hidden="true">
              {text.slice(0, visible)}
              {cursor && <span className="about-typing-cursor" />}
              <span className="about-untyped">{text.slice(visible)}</span>
            </span>
          </p>
        )
      })}
    </div>
  )
}
