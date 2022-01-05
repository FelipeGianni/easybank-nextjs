interface Theme {
  breakpoints: 'xl' | 'xlNum'
  colors: 'light' | 'dark'
  fontFamily: 'Work Sans'
  sizes:
    | 'size_64'
    | 'size_60'
    | 'size_58'
    | 'size_56'
    | 'size_52'
    | 'size_50'
    | 'size_48'
    | 'size_46'
    | 'size_44'
    | 'size_42'
    | 'size_40'
    | 'size_38'
    | 'size_36'
    | 'size_34'
    | 'size_32'
    | 'size_30'
    | 'size_28'
    | 'size_26'
    | 'size_24'
    | 'size_22'
    | 'size_20'
    | 'size_18'
    | 'size_16'
    | 'size_14'
    | 'size_12'
    | 'size_10'
  spacings: 'containerMaxWidth' | 'sectionHorPaddingMobile'
}

export interface Styled {
  theme: Theme
}
