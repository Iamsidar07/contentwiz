import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import Loading from '../components/Loading';
import Result from '../components/Result';

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
    const [platform, setPlatform] = useState("Twitter");
    const [topic, setTopic] = useState("");
    const [wordLimit, setWordLimit] = useState("700");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
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
                    "platform":platform,
                    "topic":topic,
                    "wordLimit":wordLimit,
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
        <section className='flex flex-col items-center  max-w-7xl mx-auto bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900'>

            <h1 className='text-center text-3xl font-bold md:text-7xl my-[15%] md:mt-10 md:mb-0 text-transparent bg-clip-text bg-gradient-to-br from-black to-blue-600'>&quot;Unleash your writing potential with  <span className="text-blue-600">Artificial Intelligence &quot;</span></h1>
           
            <form onSubmit={onSubmit} className="w-full text-center flex flex-col mx-auto space-y-7  p-2 md:p-5">

                <div className='w-full flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 pt-10'>
                    <div className='w-full'>
                        <p className='font-bold my-2 text-left'>Describe topic for the content:</p>
                        <input
                            type="text"
                            name='topic'
                            onChange={(e) => setTopic(e.target.value)}
                            value={topic}
                            placeholder="write your topic."
                            className="text-base leading-6 text-gray-500 bg-white px-4 py-6 md:flex-1 rounded-lg outline-none w-full"
                        />
                    </div>
                    <div className="w-full">
                        <p className='font-bold my-2 text-left'>Word limit:</p>
                        <input
                            type="number"
                            name='wordLimit'
                            onChange={(e) => setWordLimit(e.target.value)}
                            value={wordLimit}
                            placeholder="word limit"
                            className="text-base leading-6 text-gray-500 bg-white px-4 py-6  rounded-lg outline-none w-full "
                        />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center space-y-10 md:space-y-0 md:justify-between'>
                    <div className='w-full flex  flex-row items-center  space-x-3  mx-auto '>
                        {
                            plateforms.map(({ name, image }, i) => {

                                return <div onClick={() => setPlatform(name)} className={`p-3 bg-white rounded-3xl cursor-pointer group space-y-3 flex flex-col items-center justify-center h-32 ${platform === name ? "w-36 h-36 shadow" : "w-32"}`} key={i}>
                                    <Image src={image} alt={"Twitter"} width={90} height={90} className="group-hover:scale-110 transition-transform duration-200 ease-in" />
                                    <p>{
                                        platform === name
                                            ?
                                            <AiFillCheckCircle color='#2563EB' size={25} />
                                            :
                                            name
                                    }</p>
                                </div>
                            })
                        }
                    </div>
                    <input type="submit" value={`${loading ? "Creating Content..." : "Create Content"}`} className=' text bg-[#100025] border-none rounded-lg text-center cursor-pointer px-12 text-white py-6 font-bold  md:max-w-md md:ml-auto ' />
                </div>
            </form>

            {
                loading && <Loading />
            }
            {
                result && <div className='px-2 my-6'>
                    <Result result={result} />
                </div>
            }
    
        </section>
    )
}

export default WriteContent
