import React, { useEffect } from 'react'
import { useState } from 'react'

const Useeffect = () => {
  let [name, setName] = useState('Peter')
  let [age, setAge] = useState(31)
  const [testdata, setTestdata]= useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setTestdata(json))
  })

  function changeName() {
    if (name === 'Peter') {
      setName('John')
    } else {
      setName('Peter')
    }
  }

  let changeAge = () => {
    if (age === 31) {
      setAge(50)
      setName('Peter')
    } else {
      setAge(31)
      setName('John')
    }
  }

  return (
    <div>
      <h2>useEffect Basics</h2>
      <h1>{name}</h1>
      <button onClick={changeName}>Click me to change name</button>

      <h1>
        {' '}
        {name} {age} years
      </h1>
      <button onClick={changeAge}>Click to change age</button>

      {testdata.map((test)=>{
          return(
              <div className='shift'>
                  <h1>
                      {test.title}
                  </h1>
                  <h1>
                      {test.price}
                  </h1>
                  <h1>
                      {test.description}
                  </h1>
                  <img  src={test.image} alt="" />
                  <h1>
                      {test.category}
                  </h1>
              </div>
          )

      })}


    </div>
  )
}

export default Useeffect