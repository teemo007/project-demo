import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const Missing = () => {
    const [seconds, setSeconds] = useState(6);
    const navigator = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (seconds <= 0) {
            clearInterval(intervalId);
            navigator("/")
          } else {
            setSeconds(seconds - 1);
          }
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [seconds]);

    return (
<main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-[#373B44] to-[#4286f4]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-blue-400 px-2 text-sm rounded -rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <div
        className="relative inline-block text-sm font-medium text-blue-400 group active:text-blue-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-400 group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link to="/">Go Home</Link>
        </span>
        
      </div>
    </button>
    <span className="text-white tracking-widest mt-5">you will be redirect back to HomePage in {seconds} S.</span>
</main>
    )
}

export default Missing