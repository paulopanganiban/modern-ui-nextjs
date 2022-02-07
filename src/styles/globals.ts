import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

html {
    --font-family: 'Manrope', sans-serif;

    --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);

    --color-bg: #040C18;
    --color-footer : #031B34;
    --color-blog: #042c54;
    --color-text: #81AFDD;
    --color-subtext: #FF8A71;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);

    font-family: var(--font-family);
}
body {
    background: var(--color-bg);
    margin: 0;
    padding: 0;
}
a {
  color: unset;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
*, *::before, *::after {
  box-sizing: border-box;
}
`