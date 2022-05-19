import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Register from 'components/Register'
import LoginArea from 'components/LoginArea'
import MemberArea from 'components/MemberArea'


export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginArea />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/member" element={<MemberArea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}
