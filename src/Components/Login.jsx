import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../Store/authSlice'
import {Button, Input,Logo, Loading} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {set, useForm} from 'react-hook-form'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error , setError] = useState("")
    const [loading, setLoading] = useState(false)

    const login = async(data) => {
        setError("")
        setLoading(true)
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
            setLoading(true)
        } finally {
            setLoading(false)
        }
    }
  return (
    
    <div className='flex items-center justify-center w-full'>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center  z-50">
                    <Loading /> 
                </div>
            )}
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center items-center'>
                <span className='inline-block w-full max-w-[120px]'>
                    <Logo width="100%"/>

                </span>
            </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                    label = "Email: "
                    placeholder = "Enter your email"
                    type="email"
                    {...register("email",{
                        required: true,
                        validate: {
                            matchPattern: (value) => 
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                        }
                    })}
                />
                <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password",{
                        required: true,
                    })}
                />
                
                <Button type="submit" className="w-full" disabled={loading}>
                            Log in
                    </Button>
            </div>
        </form>
        </div>
    </div>
  ) 
}

export default Login