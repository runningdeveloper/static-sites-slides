import React from "react"
import styled, {css} from 'styled-components'

const Li = styled.li`
  font-size: 1.5em;
  text-align: left;
`

const AppearLink = ({children}) => {
  return <Li>
    {children}
    </Li>
}
export default AppearLink