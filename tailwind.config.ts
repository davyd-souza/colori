import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

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

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        border: 'hsl(var(--border))',

        palette: {
          1: 'hsl(var(--palette-1))',
          2: 'hsl(var(--palette-2))',
          3: 'hsl(var(--palette-3))',
          4: 'hsl(var(--palette-4))',
          5: 'hsl(var(--palette-5))',
        },
      },

      backgroundImage: {
        'palette-gradient':
          'linear-gradient(to right, hsl(var(--palette-1)) 19%, hsl(var(--palette-2)) 21% 39%, hsl(var(--palette-3)) 41% 59%, hsl(var(--palette-4)) 61% 79%, hsl(var(--palette-5)) 81% 100%)',
      },

      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-eiko)',
      },

      animation: {
        flicker: 'flicker 20s infinite linear',
      },

      keyframes: {
        flicker: {
          to: { 'mask-position': '50% 50%, 0 50%' },
        },
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },

        '.mask': {
          mask: 'radial-gradient(circle at 50% 50%, white 4px, transparent 4.5px) 50% 50% / 20px 20px, url(/noise-4.png) 512px 20% / 512px 512px',
          '-webkit-mask-composite': 'source-in, xor',
          'mask-composite': 'intersect',
        },

        '.palettes': {
          '--palette-1': '0 100% 50%',
          '--palette-2': '60 100% 50%',
          '--palette-3': '120 100% 50%',
          '--palette-4': '240 100% 50%',
          '--palette-5': '300 100% 50%',
        },
      })
    }),
  ],
}
export default config
