import { redirect } from 'next/navigation'
import { CSSProperties } from 'react'
import { parseToHsl, rgbToColorString } from 'polished'

import { PaletteColor } from '@/components/palette-color'
import { RandomColorGenerator } from '@/components/event/random-color-generator'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { result }: { result: Array<Array<number>> } = await fetch(
    'http://colormind.io/api/',
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        model: 'default',
        input: ['N', 'N', 'N', 'N', 'N'],
      }),
      cache: 'no-store',
    },
  ).then((response) => response.json())

  const colorsParams = searchParams.colors

  if (!colorsParams) {
    if (!result) {
      redirect('/?colors=ff0000-ffff00-00ff00-0000ff-ff00ff')
    }

    const hexColorArray: string[] = []

    for (const [red, green, blue] of result) {
      const hexColor = rgbToColorString({ red, green, blue })

      const color = hexColor.replace('#', '')

      hexColorArray.push(color)
    }

    const redirectColors = hexColorArray.join('-')

    redirect(`/?colors=${redirectColors}`)
  }

  const colorsArray = colorsParams.split('-')

  const styles: CSSProperties = {}

  colorsArray.forEach((color, index) => {
    const paletteCssVarName = `--palette-${index + 1}`

    const { hue, saturation, lightness } = parseToHsl(`#${color}`)

    // @ts-expect-error changing variable name
    styles[paletteCssVarName] =
      `${hue} ${saturation * 100}% ${lightness * 100}%`
  })

  return (
    <RandomColorGenerator>
      <header className="z-10 flex items-center bg-background/50 px-4 py-2 backdrop-blur-sm">
        <h1 className="font-display text-2xl">Colori</h1>
      </header>

      <div className="px-4 palettes" style={styles}>
        <div
          aria-label="canvas"
          className="w-full min-w-52 before:absolute before:inset-x-0 before:bottom-[65vh] before:top-12 before:mx-4 before:animate-flicker before:bg-palette-gradient-t before:content-[''] before:mask md:before:top-0 md:before:bg-palette-gradient-r"
        />
      </div>

      <main
        className="mb-4 grid grid-rows-5 px-4 palettes md:grid-cols-5 md:grid-rows-1"
        style={styles}
      >
        {colorsArray.map((color, index) => (
          <PaletteColor key={color} color={color} id={index + 1} />
        ))}
      </main>
    </RandomColorGenerator>
  )
}
