import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData([])
  return (
    <div className='text-4xl bg-gray-600 text-center'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="github image" height={300} width={300} />
    </div>
  )
}

export default Github

export const githubLoder = async () => {
  const response = await fetch('https://api.github.com/users/Suwaan2')
  return response.json()
}
