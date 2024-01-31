import { ComponentProps } from 'react'

type CaretSortProps = ComponentProps<'svg'>

export function CaretSort({ ...props }: CaretSortProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M80 176L128 224 176 176"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M80 80L128 32 176 80"
      />
    </svg>
  )
}
