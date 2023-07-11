import React from 'react'
import copyToClipboard from '../copyToClipboard'
import { FiCopy } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
const Result = ({ result }) => {
  return (
    <Fade bottom>
      <div className={"w-full  md:max-w-7xl mx-auto bg-white p-2 md:p-4 mb-6 relative rounded-2xl shadow"}>
        <FiCopy color='black' size={18} className="absolute top-2 right-2 cursor-pointer" onClick={(e) => copyToClipboard(result)} />
        <div className='break-words leading-2' contentEditable={true} dangerouslySetInnerHTML={{ __html: result.replaceAll('\n', '<br/>') }} />
      </div>
    </Fade>
  )
}

export default Result