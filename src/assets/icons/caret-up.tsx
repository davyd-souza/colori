import { ComponentProps } from 'react'

type CaretUpProps = ComponentProps<'svg'>

export function CaretUp({ ...props }: CaretUpProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M48 160L128 80 208 160"
      />
    </svg>
  )
}
