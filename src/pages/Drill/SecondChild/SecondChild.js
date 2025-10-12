import React, { useContext } from 'react'
import DrillContext from '../DrillContext'

function SecondChild() {
  console.log("hello");

  const data = useContext(DrillContext)
  return (
    <div>SecondChild: {data.receive}</div>
  )
}

export default SecondChild