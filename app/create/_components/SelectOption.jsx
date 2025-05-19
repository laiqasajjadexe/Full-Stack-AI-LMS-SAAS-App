import React from 'react'
import Image from 'next/image'
import { useState } from 'react'


function SelectOption({selectedStudyType}) {
    const Options=[
        {
            name:'Exam',
            icon:'/exam_1.png'
        },
        {
            name:'Job Interview',
            icon:'/job.png'
        },
        {
            name:'Practice',
            icon:'/practice.png'
        },
        {
            name:'Coding Prep',
            icon:'/code.png'
        },
        {
            name:'Other',
            icon:'/knowledge.png'
        },
    ]
    const [selectedOption,setSelectedOption]=useState();
  return (
    <div>
        <h2 className='text-center mb-2 text-lg'>For which domain, you want to create your personal study material?</h2>
        <div className='grid mt-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {Options.map((option,index)=>(
                <div key={index} 
                     className={`p-4 flex-col items-center justify-center border rounded-xl hover:border-blue-500 cursor-pointer ${option?.name==selectedOption&&'border-blue-600'}`}
                     onClick={()=>{setSelectedOption(option.name);selectedStudyType(option.name)}}>
                    <Image src={option.icon} alt={option.name} width={50} height={50}/>
                    <h2 className='text-sm mt-2'>{option.name}</h2>
                </div>
            ))}
        </div>
        


    </div>
  )
}

export default SelectOption