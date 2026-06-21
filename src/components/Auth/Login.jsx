import { useState } from "react";

const Login = ({ handleLogin }) => {


    const [password, setPassword] = useState('')
    const[email, setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email,password)
        
        setEmail("")
        setPassword("")
    }



    return (

        <div className='flex h-screen w-screen items-center justify-center'>

            <div className='border-2 border-emerald-500 rounded-xl p-20'>

                <form onSubmit={(e)=>{
                    submitHandler(e);
                }}

                className='flex flex-col items-center justify-center'>

                <input value = {email} onChange={(e)=>{ 
                    setEmail(e.target.value)
                    
}} required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your Email'></input>

                <input 
                value ={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                required className='mt-3 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password'></input>

                <button className="mt-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xl py-3 px-5 rounded-full outline-none">Log in</button>      

                </form>

            </div>

        </div>

    )

}

export default Login

