import React, { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [signupstate, setSignupstate] = useState(false)

  const toggleSignUp = () => {
    setSignupstate(!signupstate)
  }

  return (
    <div className="bg-login min-h-screen px-12 flex flex-row justify-center align-middle">
      <div>
        <Header />
      </div>
      <div className="bg-black m-auto w-[400px] h-auto z-0 px-8 py-6 bg-opacity-80 rounded-md">
        <h1 className="font-semibold text-3xl mt-2 mb-10">
          {signupstate ? "SIGN UP" : "LOG IN"}
        </h1>
        <form className="flex flex-col align-center justify-center">
          {signupstate ?
           <div className="flex flex-row w-full my-3">
            <input className="w-1/2 py-2 px-2 bg-gray-900" type="text" placeholder="First Name" />
            <input className="w-1/2 py-2 px-2 ml-2 bg-gray-900" type="text" placeholder="Last Name" />
          </div> : <></>}
          <div className="bg-black my-3">
            <input
              type="text"
              className="w-full bg-gray-900 py-2 px-2"
              placeholder="Email Address"
            />
          </div>
          <div className="bg-black my-3">
            <input
              type="password"
              className="w-full bg-gray-900 py-2 px-2"
              placeholder="Password"
            />
          </div>
          <div className="w-full m-auto flex align-middle justify-center my-4">
            <button
              className={`py-2 w-full ${
                signupstate ? "bg-gray-500" : "bg-red-800"
              } m-auto font-semibold rounded-sm`}
              type="submit"
            >
              {signupstate ? "SIGN UP" : "LOG IN"}
            </button>
          </div>
          <div className="my-6 cursor-pointer">
            <p onClick={() => toggleSignUp()}>
              {signupstate
                ? "Already a user. Log In to your account."
                : "New to NETFLIX? Register Now."}
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
