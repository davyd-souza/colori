export default function Home() {
  return (
    <>
      <header className="flex items-center px-4 py-2">
        <h1 className="font-display text-2xl">Colori</h1>
      </header>

      <div className="px-4 preserve-3d">
        <div
          aria-label="canvas"
          className="before:mask before:animate-flicker before:bg-palette-gradient h-full min-h-52 w-full min-w-52 before:absolute before:inset-0 before:mx-4 before:content-['']"
        ></div>
      </div>

      <main className="mb-4 grid grid-flow-col px-4">
        <div className="relative flex flex-col items-center justify-end bg-palette-1 p-4 before:absolute before:inset-0 before:-z-10 before:bg-palette-1 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40">
          <p className="text-2xl font-bold text-black">FF0000</p>
          <p className="text-sm font-medium text-[#141414]">Red</p>
        </div>

        <div className="relative flex flex-col items-center justify-end bg-palette-2 p-4 before:absolute before:inset-0 before:-z-10 before:bg-palette-2 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40">
          <p className="text-2xl font-bold text-black">FFFF00</p>
          <p className="text-sm font-medium text-[#141414]">Yellow</p>
        </div>

        <div className="relative flex flex-col items-center justify-end bg-palette-3 p-4 before:absolute before:inset-0 before:-z-10 before:bg-palette-3 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40">
          <p className="text-2xl font-bold text-black">00FF00</p>
          <p className="text-sm font-medium text-[#141414]">Lime</p>
        </div>

        <div className="relative flex flex-col items-center justify-end bg-palette-4 p-4 before:absolute before:inset-0 before:-z-10 before:bg-palette-4 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40">
          <p className="text-2xl font-bold text-white">0000FF</p>
          <p className="text-sm font-medium text-[#f5f5f5]">Blue</p>
        </div>

        <div className="relative flex flex-col items-center justify-end bg-palette-5 p-4 before:absolute before:inset-0 before:-z-10 before:bg-palette-5 before:opacity-70 before:blur-2xl before:content-[''] dark:before:opacity-40">
          <p className="text-2xl font-bold text-white">FF00FF</p>
          <p className="text-sm font-medium text-[#f5f5f5]">Magenta</p>
        </div>
      </main>
    </>
  )
}
