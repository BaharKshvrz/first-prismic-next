import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
            <Image 
               src="/horizontal-dashboard.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="rounded-md"
             />
            <div className="flex items-center m-2">
             <Image 
               src="/horizontal-teal.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="rounded-md"
             />
             <Image 
               src="/horizontal-orange.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="ml-5 rounded-md"
            />
            </div>

            <div className="flex items-center m-2">
              <Image 
               src="/horizontal-purple.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="rounded-md"
             />
              <Image 
               src="/logo-datadog.svg" 
               alt="logo"    
               width="40"
               height="70"
               className="rounded-md"
              />  
        </div>
        </div>
        <div className="max-w-4xl flex items-center justify-center flex-col relative p-32">
          <h1 className="text-5xl font-bold">Bring it all together</h1>
          <p className="text-xl text-center p-10 max-w-2xl">
            The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <Link href="#" className="bg-blue-800 text-white rounded-md p-3">Start building for free</Link>
            <Link href="#" className="bg-white  text-blue-800 rounded-md border border-blue-800 p-3">Request demo</Link>
          </div>

          <div className="w-[110px] h-20 bg-gray-200 p-5 rounded-md absolute -top-10 left-3/4"></div>
          <div className="w-[110px] h-20 bg-gray-200 p-5 rounded-md absolute top-0 left-0"></div>
          <div className="w-[110px] h-20 bg-gray-200 p-5 rounded-md absolute top-0 left-full"></div>
          <div className="w-[110px] h-20 bg-gray-200 p-5 rounded-md absolute -bottom-10 left-1/4"></div>
          <div className="w-[110px] h-20 bg-gray-200 p-5 rounded-md absolute bottom-0 left-0"></div>
          <div className="w-[110px] h-20 bg-gray-200 p-5 rounded-md absolute bottom-0 left-full"></div>
        </div>
        <div className="flex flex-col">
            <Image 
               src="/vertical-teal.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="rounded-md"
             />
            <div className="flex items-center m-2">
              <Image 
               src="/logo-11ty.svg" 
               alt="logo"    
               width="40"
               height="70"
               className="rounded-md"
              />   
              <Image 
               src="/vertical-pink.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="ml-5 rounded-md"
             />
             <Image 
               src="/vertical-orange.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="ml-5 rounded-md"
            />
            </div>

            <Image 
               src="/vertical-purple.jpeg" 
               alt="logo"    
               width="140"
               height="90"
               className="rounded-md"
             />
        </div>
      </div>
    </section>
  )
}

export default Hero
