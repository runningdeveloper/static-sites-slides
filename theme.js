import theme from 'mdx-deck/themes'
import sunburst from 'react-syntax-highlighter/styles/prism/okaidia'
import { injectGlobal } from 'styled-components'

export default {
  ...theme,
    // add a custom font
    font: 'Ubuntu, sans-serif',
    prism: {
      style: sunburst
    },
    h1:{
      // textTransform: 'uppercase',
      fontFamily: 'Galindo, cursive',
    },
    // custom colors
    colors: {
      text: 'black',
      background: 'white',
      link: '#d93829',
      pre: 'green'
    },
    link:{
      textDecoration: 'none'
    },
    // li:{
    //   fontSize: '1.5em',
    //   textAlign: 'left'
    // }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
