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
    </>
  )
}
