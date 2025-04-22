export const colors = {
    // Primary colors
    primary: {
      50: '#e0f7ff',
      100: '#b8e9ff',
      400: '#0095ff',
      500: '#0074e0', // Main primary
      600: '#0058b7',
    },
    
    // Semantic colors
    success: {
      500: '#00c853',
    },
    warning: {
      500: '#ffab00',
    },
    error: {
      500: '#ff5630',
    },
    
    // Neutrals
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      700: '#616161',
      900: '#212121',
    }
  } as const;
  
  export type ColorTheme = typeof colors;