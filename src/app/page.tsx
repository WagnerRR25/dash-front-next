'use client'

import { FcGoogle } from "react-icons/fc";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { useCallback, useState } from "react";

import Link from "next/link";


export default function Home() {
  <div>
    <h1>Home</h1>
    <Link href="/dashboard">Dashboard</Link>
  </div>


const [password, setPassword] = useState('');
const [user, setUser] = useState('');

const handleEntrar = useCallback (() => {
  console.log(password)
  console.log(user)
  
}, [password, user]);

return (
  <div className="h-screen">
    <div className="flex flex-1">
      <aside className="max-w-lg bg-slate-300">
        <div className="text-zinc-800 ">
          <h1 className=" mt-24 mb-32 text-2xl flex items-center justify-center">WRR25 Finance</h1>
          <h2 className=" mb-4 text-lg flex items-center justify-center">Welcome Back!</h2>
          <h2 className=" mb-4 flex items-center justify-center">Sign in to continue to Best Finance.</h2>

          <h1 className="px-4 font-bold">Username</h1>
          <input className="mx-4 mb-4" type="text" placeholder="Enter username" value={user} onChange={e => setUser(e.target.value)}/><br></br>
          <h1 className="px-4 font-bold">Password</h1>
          <div className="flex items-center justify-center gap-4">
          <input type="text" placeholder="Enter password" className="mx-4 mb-4"value={password} onChange={e => setPassword(e.target.value)} />
          <a href="https://www.google.com" className="text-gray-500 dark:text-black font-bold">Forgot password?</a>
          </div>
          <b className="px-4 mb-4">Remember me</b>
          <button className="bg-violet-500 rounded-sm py-4 px-44 mx-4 mb-4 text-base text-center flex-1 flex items-center justify-center hover:bg-violet-700" onClick={handleEntrar}>Log In</button>
          <b className="px-32 flex items-center justify-center text-center">- Sign in with -</b>
          <div className="flex items-center justify-center gap-6 mt-4">
            <a href="https://pt-br.facebook.com/login/device-based/regular/login/" className="h-9 w-9 px-2.5 py-2.5 bg-violet-500 leading-[2.9] rounded-full">
              <BsFacebook className="text-white" />
            </a>
            <a href="https://twitter.com/i/flow/login" className="h-9 w-9 px-2.5 py-2.5 bg-sky-500 leading-[2.9] rounded-full">
              <BsTwitter className="text-white" />
            </a>
            <a href="https://www.google.com" className="h-9 w-9 px-2.5 py-2.5 bg-red-400 leading-[2.9] rounded-full">
              <FcGoogle className="text-white" />
            </a>
          </div>
          <div className="mt-24 text-center">
            <p className="text-gray-500 px-16">
              Don't have an account?
              <a href="/signup" className="text-violet-500 font-semibold">
                Signup now
              </a>
            </p>
            <h2 className="mt-44 px-16">©Minia. Crafted with by Themesbrand</h2>
          </div>
        </div>
      </aside>
      <main className="flex-1 bg-violet-500 text-zinc-800 p-6">
        <div className="h-screen bg-cover relative p-5">
          <div className="absolute inset-0 bg-violet-500/90"></div>
          <ul className="bg-bubbles absolute top-0 left-0 w-full h-full overflow-hidden animate-square">
            <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%]"></li>
            <li className="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
            <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
            <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
            <li className="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
            <li className="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
            <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
            <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
            <li className="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
            <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
          </ul>
        </div>
       
      </main>
    </div>
  </div>
  )
}