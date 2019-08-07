import React from 'react'
import { Main } from "theme-ui"

const Layout = ({ children }) => {
  return (
    <div>
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
