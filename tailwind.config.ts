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
        'card-bg':
          'linear-gradient(180deg, rgba(224, 246, 244, 0.099) 0%, rgba(198, 254, 247, 0.0825) 100%)',
        'nav-bg':
          'linear-gradient(91.57deg, rgba(0, 0, 0, 0.5) 1.33%, rgba(0, 0, 0, 0.5) 33.99%);',
        'hero-img-sm': "url('/hero-img.png')",
        'hero-img-lg': "url('/hero-img-lg.png')",
        'landing-img': "url('/landing-img.png')",
        'nav-hero': "url('/nav-hero-img.png')",
        'money-img': "url('/money.png')",
      },
    },

    boxShadow: {
      shadowLight: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      white: '#fff',
      black: '#000',
      dark: '#000',
      primaryColor: ' #290F38',
      secondaryColor: '#FBAE1C',
      lightGrey: '#A5A6AF',
      titleColor: '#6FF4EC',
      darkGrey: ' #696F6E',
      borderLine: '#582775',
      borderColor: '#414245',
    },
  },
  plugins: [],
}
export default config
