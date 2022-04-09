import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div>
      {/* <h1 className='text-6xl'>Welcome</h1> */}
      {/* this is a search component */}
      <UserSearch />
      <UserResults />
      {/* {process.env.REACT_APP_GIT_TOKEN} */}
    </div>
  )
}

export default Home