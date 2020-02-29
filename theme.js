import React from 'react'
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

export default {
  Provider,
}
