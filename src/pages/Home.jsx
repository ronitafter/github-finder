import React from 'react'
import UserResults from '../components/users/UserResults'

function Home() {
  return (
    <div>
      {/* <h1 className='text-6xl'>Welcome</h1> */}
      {/* this is a search component */}
      <UserResults />
      {/* {process.env.REACT_APP_GIT_TOKEN} */}
    </div>
  )
}

export default Home