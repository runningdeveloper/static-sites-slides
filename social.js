import React from "react"
import styled, {css} from 'styled-components'

const Container = styled.div`
  // display: flex;
  // justify-content: space-around;
`

const Link = styled.a`
  padding: 5px;
  color: #d93829;
  text-decoration: none;
  :hover{
    color: black;
  }
`

const Social = () => {
  return <Container>
    <Link target="_blank" href="https://twitter.com/geoff4l">@geoff4l</Link><br/>
    <Link target="_blank" href="https://runningdeveloper.com/">runningdeveloper.com</Link>
    </Container>
}
export default Social