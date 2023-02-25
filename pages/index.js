import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from '../components/Features';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Result from '../components/Result';
import Link from 'next/link';


export default function Home() {
  const [platform, setPlatform] = useState("");
  const [topic, setTopic] = useState("");
  const [wordLimit, setWordLimit] = useState(700);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);



  return (
    <div className="p-2 md:px-8">
      <main className=" py-4 ">
        <section className='flex flex-col  items-center justify-around max-w-3xl mx-auto leading-3 h-96 space-y-5 min-h-[80vh]'>
          <div>
            <h1 className='text-center text-2xl md:text-6xl'>Transforming the way you create <span className='text-blue-600'>content</span></h1>
            <p className='text-center max-w-2xl mx-auto leading-7'>Innovative <span className='underline'>AI-powered</span> platform that makes writing easy. From blog posts to product descriptions, transform your writing with our cutting-edge technology.</p>
          </div>
          <div className=' text-center'>
            <div className='mb-5'>
              <Link href={"/write-content"}>
                <p className=' textwh bg-white border-none rounded-lg text-center cursor-pointer px-6 text-black py-5 font-bold '>start writing for free</p>
              </Link>
            </div>
            <small className='underline'>No sign in required</small>
          </div>
        </section>
        <ToastContainer />
      </main>
    </div>
  )
}
