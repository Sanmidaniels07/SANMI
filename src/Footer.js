import React from 'react'

const Footer = () => {
    let namecap = 'FEMI'
    const names = ['dan ', 'bola ', ' tunde']
    let random = Math.floor(Math.random()*names.length)
    let select = names[random]
  return (
    <div><h1>{namecap}</h1>
    <h2>{names}</h2>
    <h4 style={{color: 'red'}}>{select}</h4>
    </div>
  )
}

export default Footer