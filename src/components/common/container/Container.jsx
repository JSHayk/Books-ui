import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container' style={{maxWidth: 'var(--global-width)', margin: 'auto'}}>
        {children}
    </div>
  )
}

export default Container
