import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from 'components/Register'
import LoginArea from 'components/LoginArea'
import MemberArea from 'components/MemberArea'
import SignupLandingPage from 'components/SignupLandingPage'

const AuthContext = React.createContext()

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginArea />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/memberzone" element={<MemberArea />} />
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