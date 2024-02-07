'use client'

import { useRouter } from 'next/navigation'
import { rgbToColorString } from 'polished'
import { ReactNode, useCallback, useEffect, useState } from 'react'

type RandomColorGeneratorProps = {
  children: ReactNode
}

export function RandomColorGenerator({ children }: RandomColorGeneratorProps) {
  const router = useRouter()
  const [colors, setColors] = useState<string>(
    'ff0000-ffff00-00ff00-0000ff-ff00ff',
  )

  async function getRandomColors() {
    const { result }: { result: Array<Array<number>> } = await fetch(
      'http://colormind.io/api/',
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          model: 'default',
          input: ['N', 'N', 'N', 'N', 'N'],
        }),
      },
    ).then((response) => response.json())

    if (!result) {
      setColors('ff0000-ffff00-00ff00-0000ff-ff00ff')
    }

    const hexColorArray: string[] = []

    for (const [red, green, blue] of result) {
      const hexColor = rgbToColorString({ red, green, blue })

      const color = hexColor.replace('#', '')

      hexColorArray.push(color)
    }

    const colorsString = hexColorArray.join('-')

    setColors(colorsString)
  }

  const onKeyPress = useCallback(
    async (event: KeyboardEvent) => {
      if (event.key === ' ') {
        router.replace(`/?colors=${colors}`)
        getRandomColors()
      }
    },
    [router, colors],
  )

  useEffect(() => {
    window.addEventListener('keyup', onKeyPress)

    return () => {
      window.removeEventListener('keyup', onKeyPress)
    }
  }, [onKeyPress])

  useEffect(() => {
    getRandomColors()
  }, [])

  return <>{children}</>
}
