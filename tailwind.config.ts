import { Oswald } from 'next/font/google'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'glass-bg':
          'linear-gradient(90deg, rgba(223, 223, 223, 0.04) 0%, rgba(223, 223, 223, 0.1) 38.79%, rgba(223, 223, 223, 0.1) 59.26%, rgba(223, 223, 223, 0.06) 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img-sm': "url('/hero-img.png')",
        'hero-img-lg': "url('/hero-img-lg.png')",
      },
    },

    boxShadow: {
      shadowLight: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      white: '#fff',
      dark: '#000',
      primaryColor: ' #290F38',
      secondaryColor: '#FBAE1C',
      lightGrey: '#A5A6AF',
      darkGrey: ' #696F6E',
      borderLine: '#582775',
      borderColor: '#414245',
    },
  },
  plugins: [],
}
export default config
