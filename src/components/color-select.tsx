'use client'

import { HexColorPicker } from 'react-colorful'
import { ReactNode, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

import { Popover, PopoverContent, PopoverTrigger } from './popover'

import { Clipboard } from '@/assets/clipboard'

type ColorSelectProps = {
  id: number
  color: string
  children: ReactNode
}

export function ColorSelect({ id, color, children }: ColorSelectProps) {
  const [hexColor, setHexColor] = useState(`#${color}`)

  const searchParams = useSearchParams()
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const colorsArray = searchParams.get('colors')!.split('-')

  const handleSelectColor = () => {
    const newColorList = colorsArray
      .map((color) => {
        if (colorsArray.indexOf(color) === id - 1) {
          return hexColor.replace('#', '')
        }

        return color
      })
      .join('-')

    const params = new URLSearchParams(searchParams.toString())
    params.set('colors', newColorList)

    router.replace(`/?${params}`, { scroll: false })
  }

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>

      <PopoverContent className="space-y-2">
        <HexColorPicker
          color={hexColor}
          onChange={setHexColor}
          onMouseUp={() => handleSelectColor()}
          className="!w-auto *:!rounded-none"
        />

        <div className="flex justify-center gap-2">
          <button>
            <Clipboard />
          </button>
          <div
            style={{ backgroundColor: hexColor }}
            className="height-8 w-full"
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
