export const theme = {
  colors: {
    primary: {
      color: '#3E265E',
      contrastColor: '#fff',
    },
    secondary: {
      color: '#5411AB',
      contrastColor: '#fff',
    },
  },

  spaces: {
    small: '1rem',
    middle: '1.5rem',
    large: '2rem',
  },

}

export type TypeTheme = { theme: typeof theme }
