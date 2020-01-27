import React from 'react'

const Provider = props => (
  <div>
    {props.children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: 16,
      }}
    >
      <p style={{fontSize:40,fontFamily:`Monaco,monospace`}}> @athulcajay</p>
    </div>
  </div>
)

export default {
  Provider,
}
