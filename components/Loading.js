import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <Image src={"/flickr-loading.gif"} alt="loading" width={50} height={50}  />
  )
}

export default Loading