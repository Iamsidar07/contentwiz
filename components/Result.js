import React from 'react'
import copyToClipboard from '../copyToClipboard'
import { FiCopy } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
const Result = ({ result }) => {
  return (
    <Fade bottom>
      <div className={"w-full  md:max-w-6xl mx-auto p-2 md:p-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-opacity-25 backdrop-blur mb-6 relative rounded-lg shadow"}>
        <FiCopy color='white' size={14} className="absolute top-1 right-1 cursor-pointer" onClick={(e) => copyToClipboard(result)} />
        <div className='break-words leading-2' dangerouslySetInnerHTML={{ __html: result.replaceAll('\n', '<br/>') }} />
      </div>
    </Fade>
  )
}

export default Result