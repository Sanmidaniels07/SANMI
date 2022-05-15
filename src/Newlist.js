import React from 'react'
import image from './images/11.jpeg'


const Newlist = (props) => {
    const sabi = props.det;
    const naso = props.remove;
    const clear = props.clear

  return (
    <div>
      {sabi.map((datum) => {

        return (
          <div className='move' key={datum.id}>
            <h2> {datum.title} </h2>
            <h2> {datum.body} </h2>
            <h2> Wriiten by: {datum.author} </h2>
            <img src={image} alt='' />
            <div>
              <button onClick={() => naso(datum.id)}>Click To Remove</button>
            </div>
          </div>
        )
      })}
      <div>
          <button onClick={clear} style={{backgroundColor: 'blue', color: 'white', fontSize:20, width:665, height:50}}>Clear All</button>
      </div>
      
    </div>
  )
}

export default Newlist