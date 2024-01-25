'use client'

import { useState, useEffect } from 'react'
import { HslColorPicker } from 'react-colorful'
import clsx from 'clsx'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover'
import { hslToHex } from '@/utils/hsl-to-hex'

type PaletteColorProps = {
  id: string
}

export function PaletteColor({ id }: PaletteColorProps) {
  const [hslColor, setHslColor] = useState({ h: 0, s: 0, l: 0 })

  const { h, s, l } = hslColor

  useEffect(() => {
    const hslStyle = `${h} ${s}% ${l}%`

    const root = document.documentElement

    root.style.setProperty(`--palette-${id}`, hslStyle)
  }, [h, s, l, id])

  return (
    <div
      style={{ backgroundColor: `hsl(var(--palette-${id}))` }}
      className={clsx(
        "relative flex flex-col items-center justify-end p-4 before:absolute before:inset-0 before:-z-10 before:bg-palette-1 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40",
        {
          'before:bg-palette-1': id === '1',
          'before:bg-palette-2': id === '2',
          'before:bg-palette-3': id === '3',
          'before:bg-palette-4': id === '4',
          'before:bg-palette-5': id === '5',
        },
      )}
    >
      <Popover>
        <PopoverTrigger className="w-full">
          <p className="w-full text-2xl font-bold text-black">
            {hslToHex({ h, s, l }).toUpperCase()}
          </p>
        </PopoverTrigger>

        <PopoverContent>
          <HslColorPicker color={hslColor} onChange={setHslColor} />

          <div>
            <button>Copy to Clipboard</button>
          </div>
        </PopoverContent>
      </Popover>

      <p className="text-sm font-medium text-[#141414]">Red</p>
    </div>
  )
}
