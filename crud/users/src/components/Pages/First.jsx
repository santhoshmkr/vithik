import React, { useContext } from 'react'
import { UserContext } from '../../App'

const First = () => {

    const profile=useContext(UserContext)

    const switchUser=()=>{
        profile.setUser("user")
    }
  return (
    <div className='flex flex-col'>
        <h1 className='text-xl font-bold text-center'>{profile.user}</h1>

        <button onClick={switchUser}>click to switch user</button>
    </div>
  )
}

export default First