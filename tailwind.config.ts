import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        lightModeBg: '#E6E6E6',
        darkModeBg: '#1A1A1A',
        accentColor: '#A682FF',
        lightModeText: 'black',
        darkModeText: 'white'
      },
      screens: {
        w500: { max: '500px' },
        w400: { max: '400px' }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: any) => ({
        lightMode: {
          css: {
            '--tw-prose-kbd': theme('colors.lightModeText'),
            '--tw-prose-quote-borders': theme('colors.lightModeText'),
            '--tw-prose-bullets': theme('colors.lightModeText'),
            '--tw-prose-code': theme('colors.lightModeText')
          }
        },
        darkMode: {
          css: {
            '--tw-prose-kbd': theme('colors.darkModeText'),
            '--tw-prose-quote-borders': theme('colors.darkModeText'),
            '--tw-prose-bullets': theme('colors.darkModeText'),
            '--tw-prose-code': theme('colors.darkModeText')
          }
        }
      })
    }
  },
  darkMode: 'class',
  plugins: [typography, scrollbar]
} satisfies Config
