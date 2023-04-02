import Image from 'next/image'
import React from 'react'
import Fade from 'react-reveal/Fade';
const HomeFeature = ({ title, desc, image, alt, changeSequence }) => {

    return (
        <section className={`flex flex-col-reverse shadow-sm rounded-sm md:flex-row justify-center bg-white ${changeSequence && "md:flex-row-reverse"} `}>
            { changeSequence ? <Fade bottom>
                    <div className='space-y-3 max-w-lg  p-2 bg-white rounded-sm shadow-sm sm:shadow-none  flex flex-col justify-center '>
                        <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>{title}</h2>
                        <p className='text-center md:text-left'>{desc}</p>
                    </div>
                </Fade> : <Fade left>
                        <div className='space-y-3 max-w-lg bg-white p-3 rounded-sm shadow-sm sm:shadow-none flex flex-col justify-center'>
                        <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>{title}</h2>
                        <p className='text-center md:text-left'>{desc}</p>
                    </div>
                </Fade>
            }
            <div className='max-w-2xl'>
                <Image src={image} width={1920} height={1080} alt={alt} />
            </div>
        </section>
        )


    }
export default HomeFeature
