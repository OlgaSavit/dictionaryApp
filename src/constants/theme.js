export const themeTypes = {
  dark: 'dark',
  light: 'light'
}

const commonColor = {
  colors: {
    transparent: 'transparent',
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
    red: '#F85C50',
    yellow: '#FD0',
    yellow_01: '#B69D15',
    yellow_second: '#FFE971',
    gray: '#5D5F65',
    gray_100: '#BABBBD',
    green: '#6AAA08',
    darkTransparent: 'rgba(24, 27, 35, 0.75)'
  }
}

const light = {
  colors: {
    ...commonColor.colors,
    appBackground: '#fff',

    white: '#FFF',
    black: '#000',
    dark: '#181B23',
    dark_icon: '#e8e8e9',
    dark_30: '#F3F4F4',
    dark_300: '#5D5F65',
    inputPlaceholderColor: '#BABBBD',
    DBDTextColor: '#5D5F65', // default Btn Disabled Text Color
    OBDTextColor: 'red', // outline Btn Disabled Text Color
    lineGr1: 'rgba(255, 255, 255, 0.00)',
    lineGr2: '#FFF',
    blue_10: '#F6FBFF',
    blue_50: '#B3DFFF',
    blue_100: '#0094FF',
    darkTransparentBg: 'rgba(24, 27, 35, 0.75)'
  }
}

const dark = {
  colors: {
    ...commonColor.colors,
    appBackground: '#181B23',

    white: '#000',
    black: '#fff',
    dark: '#F3F4F4',
    dark_icon: '#F3F4F4',
    dark_30: '#2f3239',
    dark_300: '#BABBBD',
    inputPlaceholderColor: '#5D5F65',
    DBDTextColor: '#BABBBD', // default Btn Disabled Text Color
    OBDTextColor: 'blue', // outline Btn Disabled Text Color
    lineGr1: 'rgba(24, 27, 35, 0.00)',
    lineGr2: '#181B23',
    blue_10: '#181B23',
    blue_50: '#B3DFFF',
    blue_100: '#0094FF',
    darkTransparentBg: '#181B23'
  }
}

export default {light, dark}
