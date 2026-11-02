import React from 'react'
import Fetch from '../../components/Fetch'

export function List() {

  let nums =[1, 2, 3, 4, 5, 6, 7]

  let Students = [

    {
      name: "Richard",
      complexion: "fair",
      photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGkbxZNF5Pfz4G_MkeW5O16ukvn8zHNBxQ4z6afeG-A&s=10"
    },
    {
      name: "Richard",
      complexion: "fair",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MV7nUlh7aMCvHyaxC278FZDvRzulNBK9yuvRZ8vcNg&s=10"
    },
    {
      name: "Richard",
      complexion: "fair",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoUCWyo0v99yE5-EXx56NlHdIsvsnOT0lFvj4CPqtJw&s=10"
    },

  ]
  return (
    <div>
      <ul>
        {nums.map((num, i)=> (
          <li key={i}>{num}</li>
        ))}
      </ul>

      <Fetch />
    </div>
  )
}

export default List