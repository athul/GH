import React, { Fragment } from 'react'
import styled from 'styled-components' 

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  float=right
  font-size: 25px;
  font-family:IBM Plex Mono,monospace;
  color:azure;
  padding: 30px 30px;
  text-align: right;
  width: 100vw;
  border-top: 1px ;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
    <span>@Athul-CA</span>
      <span><img src="images/gce.png" height="50" width="300"/> </span>
    </Footer>
  </Fragment>
)

export default Layout