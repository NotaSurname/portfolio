type Props = {
  current: number
  max: number
  className?: string
}

export default function CharCounter({ current, max, className = '' }: Props) {
  const isOver = current > max
  const isNear = !isOver && current >= max * 0.9

  const color = isOver ? 'text-red-500' : isNear ? 'text-amber-400' : 'text-stone-200/50'

  return (
    <span className={`text-xs tabular-nums transition-colors ${color} ${className}`}>
      {current}/{max}
    </span>
  )
}
