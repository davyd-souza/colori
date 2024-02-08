import { ComponentProps } from 'react'

export function Moon({ ...props }: ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0H256V256H0z" />
      <path
        d="M108.11 28.11a96.09 96.09 0 00119.78 119.78A96 96 0 11108.11 28.11z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  )
}
