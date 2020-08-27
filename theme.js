import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        //left:1,
        bottom: -1,
        margin: 10,
      }}
    >
      <p style={{fontSize:24,fontFamily:`Jetbrains Mono,monospace`,color:`yellow`}}>@athulcajay</p>
    </div>
    <div
      css={{
        position: 'fixed',
        //right: 0,
        left:1,
        bottom: -1,
        margin: 10,
      }}
    >
      <p style={{fontSize:24,fontFamily:`Jetbrains Mono,monospace`,color:`lime`}}>@athul</p>
      
    </div>
  </div>
)
export const getLanguage = className => {
  const match = /language-(\w*)/.exec(className || 'language-javascript')
  let lang = 'javascript'
  if (match && match.length > 1) {
    lang = match[1]
  }
  return lang
}

export const pre = props => props.children

export const code = props => {
  const language = getLanguage(props.className)
  return <SyntaxHighlighter language={language} style={nightOwl} {...props} />
}

export default {
  components: {
    pre,
    code,
    Provider,
  },
}