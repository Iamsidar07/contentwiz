import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <Image src={"/flickr-loading.gif"} alt="loading" width={80} height={80} className="mx-auto my-2"/>
  )
}

export default Loading
