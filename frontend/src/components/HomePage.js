import React from 'react'
import MemberArea from './MemberArea'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
      {currentUser} ? <h2>Hello {`${currentUser}`}</h2> : <MemberArea/> 
  )
}

export default HomePage