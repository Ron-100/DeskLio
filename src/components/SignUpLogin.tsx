import { useState } from "react";
import Input from "./Input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { setUserInfo } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/appwrite";

type LoginFormData = {
  email: string
  password: string
}

type SignupFormData = {
  name: string
  email: string
  password: string
}
export default function SignUpLogin() {
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const signupForm = useForm<SignupFormData>()
  const loginForm = useForm<LoginFormData>()
  
  const handleSignup:SubmitHandler<SignupFormData> = async (data) => {
    try {
      setLoading(true)
      await appwriteService.createAccount(data)
      const user = await appwriteService.getCurrentUser()

      if (user) {
        dispatch(setUserInfo(user))
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(`Error From Sign up ${error}`);
    }finally{
      setLoading(false)
    }
  }
  
  const handleLogin:SubmitHandler<LoginFormData> = async (data) => {
    try {
      setLoading(true)
      await appwriteService.login(data)
      const user = await appwriteService.getCurrentUser()

      if (user) {
        dispatch(setUserInfo(user))
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(`Error From Login ${error}`);
    }finally{
      setLoading(false)
    }
  }
  

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full 
                 bg-[url('https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg')] 
                 bg-cover bg-center 
                 scale-110"
        />
      </div>

      {/* Dark Premium Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0B1120]/90 via-[#0F172A]/85 to-[#155DFC]/40 backdrop-blur-sm" />

      {/* Glow Accent */}
      <div className="absolute -top-25 -right-25 w-100 h-100 bg-[#155DFC] opacity-20 rounded-full blur-[120px]" />

      {/* Login Card */}
      <div className="relative z-10 w-4/5 sm:w-1/2 md:w-110 px-8 py-8 rounded-2xl  bg-white/95 backdrop-blur-xl shadow-[0px_20px_60px_rgba(0,0,0,0.35)] border border-white/30">
        <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">
          {isLogin ? "Welcome Back 👋" : "Create your account"}
        </h2>

        {!isLogin ? (
          <form onSubmit={signupForm.handleSubmit(handleSignup)} className="flex flex-col gap-2">
            <div>
              <Input label="Full Name" type="text"  placeholder="Enter your name"  
              {...signupForm.register("name",{required:'Name is required'})}
              className="w-full p-3 mb-4 rounded-lg border border-gray-200  bg-white text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#155DFC]  focus:ring-2 focus:ring-[#155DFC]/25"/>
            </div>

            <div>
              <Input label="Email" type="text" placeholder="Enter Your email" 
              {...signupForm.register("email", {
                required:'Email is required',
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:"Enter a valid email address"
                }
              })}
              className="w-full p-3 mb-4 rounded-lg border border-gray-200  bg-white text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#155DFC]  focus:ring-2 focus:ring-[#155DFC]/25"/>
            </div>

            <div>
              <Input label="Password" type="password" placeholder="••••••••" 
              {...signupForm.register("password", {required:'Password is required'})}
              className="w-full p-3 mb-4 rounded-lg border border-gray-200  bg-white text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#155DFC]  focus:ring-2 focus:ring-[#155DFC]/25"/>
            </div>


            <button type="submit" className="cursor-pointer mt-3 w-full bg-[#155DFC] hover:bg-[#0F4CD7] transition-all duration-200 p-3 rounded-lg text-white font-semibold shadow-lg shadow-[#155DFC]/30 active:scale-96">
              {loading ? (
                <div className="flex justify-center items-center gap-3">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-(--zd5-color)/50 border-r-transparent"></div>
                  <p className="text-sm text-white/60 dark:text-gray-300">
                    Loading content...
                  </p>
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={loginForm.handleSubmit(handleLogin)} className="flex flex-col gap-2">
            <div>
              <Input label="Email" type="text" placeholder="Enter Your email" 
              {...loginForm.register("email", {
                required:'Email is required',
                pattern:{
                  value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message:"Enter a valid email address"
                }
              })}
              className="w-full p-3 mb-4 rounded-lg border border-gray-200  bg-white text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#155DFC]  focus:ring-2 focus:ring-[#155DFC]/25"/>
            </div>

            <div>
              <Input label="Password" type="password" placeholder="••••••••" 
              {...loginForm.register("password", {required:'Password is required'})}
              className="w-full p-3 mb-4 rounded-lg border border-gray-200  bg-white text-[#0F172A] placeholder-gray-400 outline-none transition-all focus:border-[#155DFC]  focus:ring-2 focus:ring-[#155DFC]/25"/>
            </div>


            <button type="submit" className="cursor-pointer mt-3 w-full bg-[#155DFC] hover:bg-[#0F4CD7] transition-all duration-200 p-3 rounded-lg text-white font-semibold shadow-lg shadow-[#155DFC]/30 active:scale-96">
              {loading ? (
                <div className="flex justify-center items-center gap-3">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-solid border-(--zd5-color)/50 border-r-transparent"></div>
                  <p className="text-sm text-white/60 dark:text-gray-300">
                    Loading content...
                  </p>
                </div>
              ) : (
                'Login to Dashboard'
              )}
            </button>
          </form>
        )}

        <p className="text-gray-500 text-center mt-5 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="ml-2 text-[#155DFC] font-semibold cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
