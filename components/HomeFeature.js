import Image from 'next/image'
import React from 'react'
import Fade from 'react-reveal/Fade';
const HomeFeature = ({ title, desc, image, alt, changeSequence }) => {

    return (
        <section className={`flex flex-col-reverse md:flex-row justify-between bg-transparent  ${changeSequence && "md:flex-row-reverse bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"} }>
            {
                changeSequence ? <Fade bottom>
                    <div className='space-y-3 max-w-lg bg-white p-3 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-opacity-0.8 backdrop-blur-sm rounded-md shadow-sm sm:shadow-none flex flex-col justify-center '>
                        <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>{title}</h2>
                        <p className='text-center md:text-left'>{desc}</p>
                    </div>
                </Fade> : <Fade left>
                        <div className='space-y-3 max-w-lg bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-opacity-0.8 backdrop-blur-sm p-3 rounded-md shadow-sm sm:shadow-none flex flex-col justify-center'>
                        <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>{title}</h2>
                        <p className='text-center md:text-left'>{desc}</p>
                    </div>
                </Fade>
            }
            <div className='max-w-xl'>
                <Image src={image} width={1920} height={1080} alt={alt} />
            </div>
        </section>

    )
}

export default HomeFeature
