import Image from 'next/image'
import React from 'react'

const HomeFeature = ({title,desc,image,alt,changeSequence}) => {
  return (
      <section className={`flex flex-col-reverse md:flex-row md:items-center justify-between py-4 md:px-[2%] ${changeSequence && "md:flex-row-reverse bg-[#f6f5fa]"} bg-[#ceb9fc]`}>
          <div className='space-y-3 max-w-md'>
              <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>{title}</h2>
              <p className='text-center md:text-left'>{desc}</p>
          </div>
          <Image src={image} width={650} height={650} alt={alt} />
      </section>
  )
}

export default HomeFeature