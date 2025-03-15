import React from 'react'
import ShinyText from './Animation/ShinyText'
const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-black opacity-50 w-full '>
      <ShinyText text="THE DEV DEN" disabled={false} speed={3} className="text-lg font-bold tracking-wide text-[rgba(106,111,113,255)] rock-salt " />
    </div>
  )
}

export default Loading