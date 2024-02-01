'use client'

import { HexColorPicker } from 'react-colorful'
import { ReactNode, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { parseToHsl, parseToRgb } from 'polished'

import { Popover, PopoverContent, PopoverTrigger } from './popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'
import { Input } from './input'

import { Clipboard } from '@/assets/icons/clipboard'
import { Check } from '@/assets/icons/check'

type ColorSelectProps = {
  id: number
  color: string
  children: ReactNode
}

type ColorModel = 'hex' | 'rgb' | 'hsl'

export function ColorSelect({ id, color, children }: ColorSelectProps) {
  const [hexColor, setHexColor] = useState(`#${color}`)
  const [colorModel, setColorModel] = useState<ColorModel>('hex')
  const [copied, setCopied] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  let displayValue: string

  switch (colorModel) {
    case 'hex': {
      displayValue = hexColor
      break
    }
    case 'hsl': {
      const { hue, saturation, lightness } = parseToHsl(hexColor)
      displayValue = `${hue.toFixed(1)}, ${(saturation * 100).toFixed(1)}%, ${(lightness * 100).toFixed(1)}%`
      break
    }
    case 'rgb': {
      const { red, green, blue } = parseToRgb(hexColor)
      displayValue = `${red}, ${green}, ${blue}`
      break
    }
    default: {
      displayValue = hexColor
      break
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const colorsArray = searchParams.get('colors')!.split('-')

  const handleChangeColorModel = (newColorModel: ColorModel) => {
    setColorModel(newColorModel)
  }

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

  const handleCopy = () => {
    navigator.clipboard.writeText(displayValue)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
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

        <section className="space-y-2">
          <div className="flex justify-center gap-2">
            <Select
              value={colorModel}
              onValueChange={handleChangeColorModel}
              defaultValue="hex"
            >
              <SelectTrigger className="w-min gap-2">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="hex">Hex</SelectItem>
                <SelectItem value="hsl">HSL</SelectItem>
                <SelectItem value="rgb">RGB</SelectItem>
              </SelectContent>
            </Select>

            <Input type="text" value={displayValue} readOnly />
          </div>

          <div className="flex justify-center gap-2">
            <button onClick={handleCopy}>
              {copied ? (
                <Check className="size-6 text-popover-foreground" />
              ) : (
                <Clipboard className="size-6 text-popover-foreground" />
              )}
            </button>

            <div
              style={{ backgroundColor: hexColor }}
              className="height-8 w-full"
            />
          </div>
        </section>
      </PopoverContent>
    </Popover>
  )
}
