import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import Loading from '../components/Loading';
import Result from '../components/Result';
import Dropdown from '../components/Dropdown';

const plateforms = [
    {
        name: "Twitter",
        image: "/twitter-min.png",
    },
    {
        name: "Youtube",
        image: "/youtube-logo-min.png",
    },
    {
        name: "Linkedin",
        image: "/linkedin-min.png",
    },
]

const WriteContent = () => {

    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [post,setPost]=useState({
        topic:"",
        wordLimit:"",
        tone:"",
        plateform:""
    })

    async function onSubmit(event) {
        event.preventDefault();
        console.log({post})
        if (loading) {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch("/api/content-generator", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "post":post
                }),
            });
            
            const data = await response.json();

            if (response.status !== 200) {
                alert('Oops! something went wrong')
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            
            setResult(data.result);

        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='max-w-7xl mx-auto px-2 sm:px-5 min-h-screen '>
           <h2 className='text-2xl mt-5 text-left font-bold'>Create ✍️ post for social media</h2>
            <form onSubmit={onSubmit} className="w-full text-center flex flex-col mx-auto space-y-10  rounded-2xl mt-7">

                <div className='w-full flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-3 '>
                    <div className='w-full'>
                        <p className='font-bold my-2 text-left'>Describe topic for the content</p>
                        <input
                            type="text"
                            name='topic'
                            onChange={(e) => setPost({...post,topic:e.target.value})}
                            value={post.topic}
                            placeholder="write your topic."
                            required
                            className="text-base leading-6  bg-white px-4 py-6 md:flex-1 rounded-2xl outline-none w-full"
                        />
                    </div>
                    <Dropdown post={post} setPost={setPost}/>
                    <div className='w-full'>
                        <p className='font-bold my-2 text-left'>Word limit:</p>
                        <input
                            type="number"
                            name='wordLimit'
                            onChange={(e) => setPost({ ...post, wordLimit: e.target.value })}
                            value={post.wordLimit}
                            placeholder="word limit"
                            className="text-base leading-6 w-full bg-white px-4 py-6  rounded-2xl outline-none  "
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center space-y-10 md:space-y-0 md:justify-between'>
                    <div className='w-full flex  flex-row items-center  space-x-3  mx-auto '>
                        {
                            plateforms.map(({ name, image }, i) => {

                                return <div onClick={() => setPost({...post,"plateform":name})} className={`p-3 bg-white rounded-2xl cursor-pointer group space-y-3 flex flex-col items-center justify-center h-32 ${post.plateform === name ? "w-36 h-36 shadow" : "w-32"}`} key={i}>
                                    <Image src={image} alt={"Twitter"} width={90} height={90} className="group-hover:scale-110 transition-transform duration-200 ease-in" />
                                    <p>{
                                        post.plateform === name
                                            ?
                                            <AiFillCheckCircle color='#2563EB' size={25} />
                                            :
                                            name
                                    }</p>
                                </div>
                            })
                        }
                    </div>
                    <input type="submit" value={`${loading ? "Creating Content..." : "Create Content"}`} className=' text bg-[#100025] border-none rounded-2xl text-center cursor-pointer px-12 text-white py-6 font-bold  md:max-w-md md:ml-auto ' />
                </div>
            </form>

            {
                loading && <Loading />
            }
            {
                result && <div className='px-2 mt-12'>
                    <Result result={result} />
                </div>
            }
    
        </section>
    )
}

export default WriteContent
