import React from 'react'
import Posts from './Posts'
import MiniProfile from './MiniProfile'

export default function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
        {/* {post {leftside }} */}
        <section className='md:col-span-2
        '>
            <Posts/>
        </section>

        {/* {profile on right side} */}
        <section>
        <div className='fixed w-[380px]'>
            <MiniProfile/>
        </div>
        </section>
        
    </main>
  )
}
