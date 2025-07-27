import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email", email)
        console.log("Password", password)

        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className=' border-2 border-emerald-600 rounded-xl p-20' >
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center' 
            >
                <input className='outline-none border-2 border-emerald-600 text-xl text-white  bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400'
                 type="email" 
                 placeholder='Enter your Email' required
                 value={email}
                 onChange={(e)=>{
                    console.log(e.target.value)
                    setEmail(e.target.value)
                 }} 
                />
                <input className='outline-none  border-2 border-emerald-600 text-xl text- mt-3 text-white  bg-transparent py-3 px-5 rounded-full placeholder:text-gray-400'
                 type="password" 
                 placeholder=' Enter Password' 
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 required
                />
                <button className='outline-none bg-emerald-600 text-xl text-white mt-5 py-3 px-5 rounded-full hover:bg-emerald-700 transition-all duration-300 ' type='submit' >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login