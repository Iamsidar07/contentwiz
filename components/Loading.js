import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <div className="p-2 bg-white rounded-2xl mx-auto shadow-md w-40 h-32 text-center my-2">
      <Image src={"/flickr-loading.gif"} alt="loading" width={80} height={80} className='mx-auto' />
      <p className='text-center'>Doing Magic🪄 </p>
    </div>
  )
}

export default Loading
