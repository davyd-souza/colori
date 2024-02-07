import { getContrast } from 'polished'

import { ColorSelect } from './color-select'

import { cn } from '@/lib/utils'

type PaletteColorProps = {
  id: number
  color: string
}

export function PaletteColor({ id, color }: PaletteColorProps) {
  const paletteCssVarName = `--palette-${id}`

  const shouldColorBeBlack = getContrast(`#${color}`, '#fff') < 3.5

  const beforeBackgroundColor = [
    'before:bg-palette-1',
    'before:bg-palette-2',
    'before:bg-palette-3',
    'before:bg-palette-4',
    'before:bg-palette-5',
  ]

  return (
    <div
      style={{
        backgroundColor: `hsl(var(${paletteCssVarName}))`,
      }}
      className={`${beforeBackgroundColor[id - 1]} relative flex flex-col items-center justify-end p-4 before:absolute before:inset-0 before:-z-10 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40`}
    >
      <ColorSelect color={color} id={id}>
        <p
          className={cn('w-full text-center text-2xl font-bold text-white', {
            'text-black': shouldColorBeBlack,
          })}
        >
          {color.toUpperCase()}
        </p>
      </ColorSelect>
    </div>
  )
}
