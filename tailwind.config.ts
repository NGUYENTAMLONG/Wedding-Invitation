import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    extend: {
      screens: {
        'xl-custom': '1440px',
      },
      maxHeight: {
        80: 'calc(100vh - 80px)',
      },
      borderWidth: {
        half: '0.5px',
        '2xs': '0.25px',
        xs: '0.2px',
        1: '1px',
        3: '3px',
        5: '5px',
      },
      borderColor: {
        dark: {
          900: '#CBCBCB',
        },
        blue: {
          450: '#3EA9E1',
        },
      },
      width: {
        '7/10': '70%',
        35: '150px',
        45: '180px',
      },
      colors: {
        blue: {
          450: '#3EA9E1',
          550: '#0088CC',
        },
        silver: '#F5F7FA',
        royalBlue: '#4169E1',
        blueBlack: '#161622',
        deepGrey: '#353744',
        dGrey: '#5D6170',
        darkGreyB: '#464B6D',
        neutralGrey: '#8A939B',
        spaceCadet: '#2E314D',
        deepIndigo: '#3D4166',
        deepOcean: '#262839',
        deepGreyB: '#333547',
        brightBlue: '#007BFF',
        lightGrey: '#B0B6C7',
        greyBlue: '#CBD2E7',
        lightBlue: '#EDF1FF',
        mainYellow: '#FFD700',
        navy: '#1F41A7',
        azure: '#89A3F1',
        gunmetalBlue: '#1E1F2A',
        herbalGreen: '#32C997',
        deepOceanBlue: '#001F3F',
        royalBlueShadow: '#4169E10A',
        red: {
          550: '#ee5d50',
        },
        white: '#ffffff',
        brown: {
          medium: '#F4F4F4',
          primary: '#BBA085',
        },
      },
      boxShadow: {
        v1: '-2.01px 1.34px 2.68px 0px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        allura: ['Allura', 'cursive'],
        mexico: ['Playwrite MX Guides', 'cursive'],
      },
      letterSpacing: {
        '01': '-0.01rem',
        '02': '-0.02rem',
        '03': '-0.03rem',
        '04': '-0.05rem',
        '05': '-0.1rem',
        '06': '-0.2rem',
        '07': '0.01rem',
        '08': '0.03rem',
        '09': '-0.15rem',
        '10': '-0.005rem',
        '11': '-0.04rem',
        '12': '0.02rem',
        '13': '0.64px',
        '14': '0.1rem',
        '15': '0.05rem',
        '16': '-0.07rem',
      },
      fontSize: {
        '3xs': '10px',
        '2xs': '12px',
        xs: '14px',
        sm: '16px',
        base: '18px',
        lg: '20px',
        xl: '22px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
      },
      fontWeight: {
        xs: '300',
        sm: '400',
        base: '600',
        lg: '700',
      },
      lineHeight: {
        '3xs': '12px',
        '2xs': '16.34px',
        xs: '16px',
        sm: '20px',
        base: '24px',
        lg: '26px',
        xl: '36px',
        '2xl': '44px',
        max: '100%',
      },
      gap: {
        base: '2px',
        lg: '3px',
        xl: '4px',
        '2xl': '8px',
        '3xl': '12px',
        '4xl': '15px',
        '5xl': '16px',
        '6xl': '20px',
      },
      borderRadius: {
        sm: '2px',
        base: '4px',
        md: '5px',
        lg: '8px',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-start': {
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        },
        '.flex-end': {
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        },
      });
    }),
  ],
} satisfies Config;
