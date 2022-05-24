import React, {createContext, useReducer} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import reducer from  './reducers/reducer'

import Register from 'components/Register'
import LoginArea from 'components/LoginArea'
import MemberArea from 'components/MemberArea'

const AuthContext = createContext();

const App = () => {
  const [authState, authDispatch] = useReducer(reducer, null);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
    <main>
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginArea />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/memberzone" element={<MemberArea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
    </AuthContext.Provider>
  )
}

export default App