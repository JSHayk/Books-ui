import React from 'react'
import { CONFIG } from '../../config'
import Container from '../common/container/Container'

const Header = () => {
  return (
    <header>
      <Container>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="navbar">
          <ul>
            {
              CONFIG.headerConfig.navConfig.map(({id, name}) => {
                  return (
                      <li key={id}>
                          {name}
                      </li>
                  )
              })
            }
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header
