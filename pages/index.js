import Link from 'next/link';
import HomeFeature from '../components/HomeFeature';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div >
      <main className="py-4 ">
        <Fade bottom>
        <section className='flex flex-col  items-center justify-around max-w-7xl mx-auto leading-3  space-y-5 min-h-[calc(100vh-68px)]'>
          <div className='space-y-2'>
              <h1 className='text-center text-3xl font-bold md:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-black to-blue-600'>Transforming the way you
    <span className="text-blue-600"> create content.</span></h1>
              
            <p className='text-center max-w-3xl mx-auto leading-7 text-lg text-[#80868b]'>Innovative <span className='underline'>AI-powered</span> platform that makes writing easy. From blog posts to product descriptions, transform your writing with our cutting-edge technology.</p>
          </div>
          <div className=' text-center'>
            <div className='mb-5'>
              <Link href={"/write-content"}>
                <p className='bg-[#100025] border-none rounded-2xl text-center cursor-pointer px-12 text-white py-6'>start writing for free</p>
              </Link>
            </div>
            <small className='underline'>No sign in required</small>
          </div>
        </section>
        </Fade>
        <HomeFeature title={"Create content for YouTube"} image={"/blog.svg"} alt="content for youtube" desc={"Take your YouTube channel to the next level with our AI-powered content generator. Effortlessly create engaging and high-quality  content that your audience will love."} />

        <HomeFeature title={"Create content for Twitter"} image={"/growth-analysis-min.gif"} alt="content for twitter" desc={"Make a statement on Twitter with our AI-generated content. Create attention-grabbing tweets effortlessly, and stand out in the crowded social media landscape."} changeSequence={true} />

        <HomeFeature title={"Create content for LinkedIn"} image={"/content-moderation-min.gif"} alt="content for LinkedIn" desc={"Build your professional brand with our AI-powered content generator for LinkedIn. Create engaging posts that showcase your expertise and help you connect with your network."} />

        <section className={`flex items-center justify-center py-4 md:px-[2%] h-48 bg-[#f6f5fa]`}>
          <h2 className='text-5xl md:text-6xl font-bold text-center md:text-left'>Always <span className='text-blue-500'>free!</span> </h2>
        </section>
      </main>
    </div>
  )
}
