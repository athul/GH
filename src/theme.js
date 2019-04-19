import theme from 'mdx-deck/themes'
import Layout from './Layout'

var green = '#42ff71';

export default {
  ...theme,
 Layout,
  font: '"Product Sans", monospace',
  monospace: '"Anonymous Pro", monospace',
  colors: {
    text: green,
    background: '#000',
    link: green,
    pre: '#000',
    preBackground: green,
    code: '#000',
    codeBackground: green
  },
  blockquote: {
    fontStyle: 'italic'
  },
  css: {
    textAlign: 'left',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '32px'
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh'
    }
  }
};

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
