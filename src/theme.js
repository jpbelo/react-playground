// const breakpoints = [
//   '480px',
//   '736px',
//   '980px',
//   '1280px',
//   '1690px',
// ]

// breakpoints.xs = breakpoints[0]
// breakpoints.s = breakpoints[1]
// breakpoints.m = breakpoints[2]
// breakpoints.l = breakpoints[3]
// breakpoints.xl = breakpoints[4]

export default {
  name: 'default',
  // breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [8, 13, 21, 34, 55],
  colors: {
    primary: {
      main: 'hsl(80,100%,50%)',
      dark: 'hsl(80,50%,35%)',
      bg: 'hsl(80,50%,75%)',
      bgAlt: 'hsl(80,50%,90%)',
    },
    secondary: {
      main: 'hsl(190,100%,65%)',
      dark: 'hsl(190,50%,40%)',
      bg: 'hsl(190,50%,85%)',
      bgAlt: 'hsl(190,50%,92%)',
    },
    grey: {
      main: 'hsl(0,0%,20%)',
      light: 'hsl(0,0%,90%)',
      bg: 'hsl(0,0%,40%)',
      bgAlt: 'hsl(0,0%,50%)',
    },
  },
}
