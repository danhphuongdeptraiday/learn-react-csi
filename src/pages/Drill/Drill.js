import React, { Children } from 'react'
import "./Drill.css"
import FristChild from './FirstChild/FristChild'
import SecondChild from './SecondChild/SecondChild'

function Drill() {
  return (
    <div className='container'>
        <FristChild />
        <SecondChild />
    </div>
  )
}

export default Drill