import Image from 'next/image'
import React from 'react'
import Fade from 'react-reveal/Fade';
const HomeFeature = ({ title, desc, image, alt, changeSequence }) => {

    return (
        <section className={`flex flex-col-reverse md:flex-row   justify-between  ${changeSequence && "md:flex-row-reverse"} bg-white`}>
            {
                changeSequence ? <Fade bottom>
                    <div className='space-y-3 max-w-lg bg-white p-3 rounded-md shadow-lg sm:shadow-none flex flex-col justify-center '>
                        <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>{title}</h2>
                        <p className='text-center md:text-left'>{desc}</p>
                    </div>
                </Fade> : <Fade left>
                        <div className='space-y-3 max-w-lg bg-white p-3 rounded-md shadow-lg sm:shadow-none flex flex-col justify-center'>
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