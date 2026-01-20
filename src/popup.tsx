import { MemoryRouter, Route, Routes } from "react-router-dom"

import { SignIn } from "~pages/auth/SignIn"
import { SignUp } from "~pages/auth/SignUp"
import { Welcome } from "~pages/welcome/Welcome"

import "~style.css"

function IndexPopup() {
  return (
    <div className="h-[500px] w-[400px]">
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </MemoryRouter>
    </div>
  )
}

export default IndexPopup
