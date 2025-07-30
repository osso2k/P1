import React from 'react'
import { Link, useParams } from 'react-router'


export const meta = ()=>{[
    {title:"ResumeAI | Review"},
    {name:'description',content:'FeedBack Time'}
]}
const overview = () => {
  const {id} = useParams()
  
  return (
    <main className="!pt-0">
      <nav className='resume-nav'>
        <Link to='/' className='back-button' />
          <img src="/icons/back.svg" alt="" className='w-2.5 h-2.5'/>
          <span className='text-gray-800 text-sm font-semibold'>Back to Home page</span>

      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className='feedback-section animate-in fade-in duration-1000 gradient-border max-sm:m-0'></section>
      </div>
    </main>
  )
}

export default overview
