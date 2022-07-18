import React from 'react'
import WaspSourceHeader from './WaspSourceHeader.js'

const addWaspSourceHeader = (Component) => {
  return function AddHeader(props) {
    return (
      <>
        <WaspSourceHeader name="Waspello"/>
        <Component { ...props } />
      </>
    )
  }
}

export default addWaspSourceHeader