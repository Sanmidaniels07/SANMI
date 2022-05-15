import React from 'react'
import { useState } from 'react'

const Section1 = () => {
    let [counter, setCounter] = useState(0)
    let [values, setValues] = useState({
        Name: 'Dami',
        Age:50,
        Description: 'Dami is a front-end developer',
        Friends: ['Tunde', ' Daniel']
    })

    function runAm(){
        setValues({
            ...values,
            Name: 'Dupe',
            Age: 80,
            Description: 'Dupe is a back-end developer'
        })

    }

    let Dec = ()=>{
        setCounter( counter --  )
    }
    let Inc = ()=>{
        setCounter( counter ++  )
    }
    let res = ()=>{
        setCounter( counter =0  )
    }
  return (
    <div>
      <h2>Section1</h2>
      <h1>{values.Name}</h1>
      <h1>{values['Age']}</h1>
      <h1> {values.Description} </h1>
      <h1>{values['Friends']}</h1>
      <button style={ {backgroundColor: 'green', color:'white' } } onClick={runAm}>Abeg click to change Damis</button>

      <h2> {counter} </h2>

      <button onClick={Dec}>Decrease</button>
      <button onClick={res}>Reset</button>
      <button onClick={Inc}>Increase</button>
    </div>
  )
}

export default Section1