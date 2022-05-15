import React, {useState} from 'react';
// import { Data } from './Data';
import Newlist from "./Newlist"


const List = () => {
    let [Data, setData] = useState([
      {
        id: 1,
        title: 'Eggys Tech',
        body: ' We build web apps',
        author: 'Eggy',
      },
      {
        id: 2,

        title: 'Dannys Tech',
        body: ' We do product designs',
        author: 'Daniel',
      },
      {
        id: 3,

        title: "Mike's Consults",
        body: 'We perform cyber security services ',
        author: 'Sir Mike',
      },
      {
        id: 4,

        title: "Dammy's Computers",
        body: 'We procure hardwares and software packages ',
        author: 'Mummy Zahra',
      },
      {
        id: 5,

        title: 'Faithoski Services',
        body: 'We carry out advert for tech companys ',
        author: 'Faith Olubunmi',
      },
    ])
    function remove(id){

        let newWays = Data.filter( (datum)=> datum.id !== id )
        setData(newWays)

    }

    let clear = ()=>{
        setData([])

    }
 
  return (
    <div>
        <Newlist det={Data} remove = {remove} clear={clear} />
     
    </div>
  )
}

export default List