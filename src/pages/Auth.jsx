import React, { useState } from 'react'
// import { toast } from "react-hot-toast"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { sendOtp } from "../services/operations/authAPI"
import { setSignupData } from "../slices/authSlice"
import { login } from "../services/operations/authAPI"



export default function Auth() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  })

  const [authType, setAuthType] = useState(0)

  const { username, email, password } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
    console.log(formData)
  }
  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    const signData = {
      ...formData,
    }

    if (!authType) {
      dispatch(login(email, password, navigate))
    } else {
      // Setting signup data to state
      // To be used after otp verification
      dispatch(setSignupData(signData))
      // Send OTP to user for verification
      dispatch(sendOtp(formData.email, navigate))

    }
    // Reset
    setFormData({
      username: "",
      email: "",
      password: "",
    })
  }
  return (
    <div className="relative z-0 w-[100vw] h-[100vh] overflow-hidden bg-[url('/public/frame-15@3x.png')] center bg-cover bg-no-repeat bg-[top] text-left text-base text-white font-poppins">
      <div className='Title absolute top-[10vh] left-[8vw]'>
        <h1 className="font-bold text-4xl">DOODLY</h1>
        <p className=" text-lg">Play Solve Draw</p>
      </div>

      <div className="container flex justify-center content-center h-[100vh]">
        <div className=" py-10 self-center justify-self-center h-[80vh] w-[30vw] rounded-[18px] bg-slate-900 [backdrop-filter:blur(4px)]">
          <div className='h-[100%]'>

            <div className=" font-medium text-gainsboro text-center ">
              <p className=' text-center text-2xl'>{!authType ? 'Sign In' : 'Sign Up'}</p>
              <p className=' text-center'>Get started with your existing account</p>
            </div>


            <div className=' h-[100%] p-10 pb-10 flex flex-col gap-3'>


              <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">

                <input className="bg-gray-800 autofill:bg-gray-800 appearance-none  h-[3rem] w-[100%] focus:bg-gray-800 focus:outline-none rounded-md box-border  border-[1px] border-solid border-darkslategray-200 placeholder:text-center"
                  placeholder="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                />

                {authType ? (<input className="bg-gray-800 appearance-none h-[3rem] w-[100%] focus:bg-gray-800 focus:outline-none rounded-md box-border  border-[1px] border-solid border-darkslategray-200 placeholder:text-center"
                  placeholder='username'
                  type="name"
                  name='username'
                  value={username}
                  onChange={handleOnChange}
                />)
                  : ('')
                }

                <input className="bg-gray-800 appearance-none h-[3rem] w-[100%] focus:bg-gray-800 focus:outline-none rounded-md box-border  border-[1px] border-solid border-darkslategray-200 placeholder:text-center"
                  placeholder='password'
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                />

                <button className=" bg-violet-700 rounded-md cursor-pointer [border:none] font-semibold font-poppins text-white text-center h-[3rem] w-[100%]" type='submit'>
                  {!authType ? 'Get Started' : 'Create Account'}
                </button>

              </form>


              <p className=' text-center'>OR</p>
              <div className=" flex justify-center content-center bg-gray-200  text-xl font-semibold text-gray-800  h-[3rem] w-[100%]">
                Log in with Google
                <img className="  object-cover" src="/googlelogopngiconfreedownloadsuf63j-1@2x.png" />
              </div>

              <div className=' select-none'>
                <p>{!authType ? (<p>Don't have an account? <span className=' text-purple-400 cursor-pointer' onClick={() => setAuthType(!authType)}>Sign Up Here</span></p>)
                  : (<p>Already have an account? <span className=' text-purple-400 cursor-pointer' onClick={() => setAuthType(!authType)}>Sign In Here</span></p>)
                }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
