import { PaletteColor } from '@/components/palette-color'

export default function Home() {
  return (
    <>
      <header className="z-10 flex items-center bg-background/50 px-4 py-2 backdrop-blur-sm">
        <h1 className="font-display text-2xl">Colori</h1>
      </header>

      <div className="px-4">
        <div
          aria-label="canvas"
          className="h-full min-h-52 w-full min-w-52 before:absolute before:inset-0 before:mx-4 before:animate-flicker before:bg-palette-gradient before:content-[''] before:mask"
        />
      </div>

      <main className="mb-4 grid grid-cols-5 px-4">
        <PaletteColor id="1" />
        <PaletteColor id="2" />
        <PaletteColor id="3" />
        <PaletteColor id="4" />
        <PaletteColor id="5" />
      </main>
    </>
  )
}
