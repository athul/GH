import React from 'react'

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: -1,
        margin: 10,
      }}
    >
      <p style={{fontSize:24,fontFamily:`Monaco,monospace`}}> @athulcajay</p>
    </div>
  </div>
)

export default {
  Provider,
}
