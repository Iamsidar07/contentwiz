import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
const tones = ["🙂 Friendly", "💎 Luxury", "🙂 Relaxed", "💼 Professional", "💪 Bold","🌲 Adventure","💡 Witty","🧠 Persuasive","👏 Empatheic"];
const Dropdown = ({ post, setPost }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    return (
        <div className='w-full relative'>
            <p className='my-2 text-left font-semibold'>Choose a tone</p>
            <div className='flex items-center space-x-2 bg-white px-4 py-6 rounded-2xl' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <input type="text" value={post.tone} onChange={(e)=>{
                    setPost({ ...post, tone: e.target.value });
                    console.log(e.target.value)
                }}  placeholder='Choose a tone for your post' className='bg-white  outline-none flex-1' />
                <AiOutlineDown size={18} color="gray" />
            </div>
            {
                isDropdownOpen && <div className='bg-white rounded-2xl space-y-2 absolute top-15 w-full shadow max-h-56 overflow-y-scroll'>
                    {
                        tones.map((item, i) => <p key={i} className='hover:bg-blue-100 cursor-pointer text-left px-4 py-2' onClick={() => {
                            setPost({...post,tone:item});
                            console.log({post})
                            setIsDropdownOpen(false);
                        }}>{item}</p>)
                    }

                </div>
            }
        </div>
    )
}

export default Dropdown