import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <Image src={"/work-process.png"} alt="loading" width={100} height={100} className="animate-spin" />
  )
}

export default Loading