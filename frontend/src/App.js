import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from 'components/Register/Register'
import LoginArea from 'components/LoginArea/LoginArea'
import Member from 'components/Member/Member'
import SignupLandingPage from 'components/SignUpLandingPage/SignupLandingPage'

const AuthContext = React.createContext()

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [authUser, setAuthUser] = useState(null)


  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser, authUser, setAuthUser}}>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginArea />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/member" element={<Member />} />
          <Route path="/signupsuccess" element={<SignupLandingPage />} />
          {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>
      </BrowserRouter>
    </main>
 </AuthContext.Provider>
  )
}

export {AuthContext}
export default App