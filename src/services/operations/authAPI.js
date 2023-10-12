import { toast } from "react-hot-toast"
import { setLoading, setToken, setUser } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      console.log('loggg');
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
      })
      // do not log the response 
      // it will reveal the otp 
      // OR HIDE MASK THE RESPONSE IN THE BACKEND 

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      // toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    } catch (error) {
      if(error.response.data.status==409){
        console.log("User Already exist, Could Not Send OTP",)
        toast.error("User Already exist")
      }
      else{
        console.log("SENDOTP API ERROR .......")
        toast.error("Could Not Send OTP")
      }
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function signUp(
  username,
  email,
  password,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        username,
        email,
        password,
        otp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/auth")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/auth")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    console.log('toasting');
    const toastId = toast.loading("Loading...")
    console.log(toastId);
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      dispatch(setToken(response.data.token)) 
      const userImage = response.data?.user?.image
      ? response.data.user.image
      : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.username}`
      dispatch(setUser({ ...response.data.user, image: userImage }))
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      navigate("/dashboard")
      toast.success("Login Successful")
    } catch (error) {
      if (error.response.data.status==405) {
        toast.error("User does not exist")
      }
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}



export function getPasswordResetToken(email , setEmailSent) {
  return async(dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {email,})

      console.log("RESET PASSWORD TOKEN RESPONSE....", response);

      if(!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    }
    catch(error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  }
}

export function resetPassword(password, confirmPassword, token) {
  return async(dispatch) => {
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword, token});

      console.log("RESET Password RESPONSE ... ", response);


      if(!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password has been reset successfully");
    }
    catch(error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Unable to reset password");
    }
    dispatch(setLoading(false));
  }
}