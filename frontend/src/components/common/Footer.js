import React from 'react'
import { Footer } from 'react-materialize'
import styled from 'styled-components'

const LinksContainer = styled.div`
  * {
    padding-left: 10px;
  }
`

export default function PageFooter () {
  return (
    <Footer copyrights="&copy; 2017 Vladimir Ananiev"
            moreLinks={
              <LinksContainer>
                <a className="grey-text text-lighten-4 right" href="https://github.com/VladimirAnaniev/LoggIt">GitHub</a>
              </LinksContainer>
            }
            className='blue-grey darken-4'
    >
    </Footer>
  )
}