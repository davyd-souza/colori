import { redirect } from 'next/navigation'

import { PaletteColor } from '@/components/palette-color'
import { CSSProperties } from 'react'
import { parseToHsl } from 'polished'

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const colors = searchParams.colors

  if (!colors) {
    redirect('/?colors=ff0000-ffff00-00ff00-0000ff-ff00ff')
  }

  const colorsArray = colors.split('-')

  const styles: CSSProperties = {}

  colorsArray.forEach((color, index) => {
    const paletteCssVarName = `--palette-${index + 1}`

    const { hue, saturation, lightness } = parseToHsl(`#${color}`)

    // @ts-expect-error changing variable name
    styles[paletteCssVarName] =
      `${hue} ${saturation * 100}% ${lightness * 100}%`
  })

  return (
    <>
      <header className="z-10 flex items-center bg-background/50 px-4 py-2 backdrop-blur-sm">
        <h1 className="font-display text-2xl">Colori</h1>
      </header>

      <div className="px-4 palettes" style={styles}>
        <div
          aria-label="canvas"
          className="h-full min-h-52 w-full min-w-52 before:absolute before:inset-0 before:mx-4 before:animate-flicker before:bg-palette-gradient before:content-[''] before:mask"
        />
      </div>

      <main className="mb-4 grid grid-cols-5 px-4 palettes" style={styles}>
        {colorsArray.map((color, index) => (
          <PaletteColor key={color} color={color} id={index + 1} />
        ))}
      </main>
    </>
  )
}
