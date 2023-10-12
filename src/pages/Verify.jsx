import React, { useState, useEffect } from 'react'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from "../services/operations/authAPI";

export default function Verify() {
  const [otp, setOtp] = useState('');
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      username,
      email,
      password,
    } = signupData;

    dispatch(
      signUp(
        username,
        email,
        password,
        otp,
        navigate
      )
    );
  };
  return (
    <>
      <div className="relative z-0 w-[100vw] h-[100vh] overflow-hidden bg-[url('/public/frame-15@3x.png')] center bg-cover bg-no-repeat bg-[top] text-left text-base text-white font-poppins">
        <div className='Title absolute top-[10vh] left-[8vw]'>
          <h1 className="font-bold text-4xl">DOODLY</h1>
          <p className=" text-lg">Play Solve Draw</p>
        </div>

        <div className="container flex flex-col justify-center items-center h-[100vh]">
          <form onSubmit={handleVerifyAndSignup}>

            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className=' mx-[2vw]'></span>}
              renderInput={(props) =>
                <input {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] border-0 bg-slate-500 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50 focus-within:outline-none"
                />}
            />
            <button
              type="submit"
              className="w-[50vw] bg-slate-500 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
