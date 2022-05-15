import React from 'react'
import image from './images/10.jpeg'
import './Main.css'
import { useState } from 'react'

const Main = () => {
    let [ages, setAges] = useState(70)
    let [name, setName] = useState('peter')
    let fullName = 'daniel'
    let trainees = ['dami', 'daniel', 100, 50]
    let googlelink = 'https://www.google.com'
    // function hold (age){console.log('i am '  +  age  + ' years old');}
    let age = 50;
    function agechanger () {
      age = 100
      }
    function changes() {
  
        if (ages === 70){
          setAges(1000)
          setName('james')
        }
        else{
          setAges(70)
          setName('peter')
        }
      }
    // function colorchanges(){
    //   setColor(red)
    // }
  return (
    <div className='main'>
    <p>{name} is {ages} years old</p>
    <button onClick={changes}>please click to change ages</button>
    <h2>Main</h2>
    <h4>{fullName}</h4>
    <h2>{trainees}</h2>
    <a href={googlelink}>Google</a>
    <img src={image} alt="image"/>
    {/* <button onClick={()=> hold (100)}>click to continue</button> */}
    
    <p>{age}</p>
    <button onClick={agechanger}>click me</button>
    
    </div>
    
  )
}

export default Main