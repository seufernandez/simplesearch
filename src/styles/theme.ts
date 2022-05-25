import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '560px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '2400px',
});

export const theme = extendTheme({
  // no blue Border
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },

  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  styles: {
    global: {
      body: {
        bgColor: 'gray.800',
        color: 'gray.200',
      },
    },
  },
});
