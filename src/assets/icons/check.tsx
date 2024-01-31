import { ComponentProps } from 'react'

type CheckProps = ComponentProps<'svg'>

export function Check({ ...props }: CheckProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M40 144L96 200 224 72"
      />
    </svg>
  )
}
