import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        palette: {
          1: 'hsl(var(--palette-1))',
          2: 'hsl(var(--palette-2))',
          3: 'hsl(var(--palette-3))',
          4: 'hsl(var(--palette-4))',
          5: 'hsl(var(--palette-5))',
        },
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-eiko)',
      },
    },
  },
  plugins: [],
}
export default config
