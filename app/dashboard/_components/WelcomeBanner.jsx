"use client"
import React, { use } from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

function WelcomeBanner() {
    const {user}=useUser();
  return (
    <div className='p-5 bg-blue-500 w-full text-white rounded-lg flex gap-6 items-center'>
        <Image src={'/laptop.png'} alt='laptop' width={100} height={100}/>
        <div>
            <h2 classNmae='font-bold text-3xl'>Hello, {user?.fullName}</h2>
            <p>Welcome Back, It's time to get back and start learning new course</p>
        </div>
    </div>
  )
}

export default WelcomeBanner;