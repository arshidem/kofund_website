import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          DEFAULT: 'var(--primary)',
          dark: '#00BFA6',
          light: '#00E3C3',
        },
        // Background colors
        background: 'var(--background)',
        card: 'var(--card)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        // Text colors
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          cards: 'var(--text-cards)',
        },
        // Status colors
        revenue: 'var(--revenue)',
        expense: 'var(--expense)',
        balance: 'var(--balance)',
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        info: 'var(--info)',
        // Progress colors
        progress: {
          bg: 'var(--progress-bg)',
          fill: 'var(--progress-fill)',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, var(--primary-start), var(--primary-end))',
        'light-gradient': 'linear-gradient(135deg, #E8F5F2 0%, #F4FAF9 100%)',
      },
    },
  },
  plugins: [],
}

export default config