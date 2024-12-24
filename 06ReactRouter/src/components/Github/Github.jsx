import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Suwaan2')
  //   .then(Response => Response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="github img"  width={300} height={300}/>
      User Blog: {data.blog}
          </div>
  )
}

export default Github

export const githubLoader = async () =>{
  const response = await fetch('https://api.github.com/users/Suwaan2')
  return response.json()
}
