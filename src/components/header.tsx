import { ThemeChanger } from './theme-changer'

export function Header() {
  return (
    <header className="z-10 flex items-center justify-between bg-background/50 px-4 py-2 backdrop-blur-sm">
      <h1 className="font-display text-2xl">Colori</h1>

      <ThemeChanger />
    </header>
  )
}
