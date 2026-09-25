import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='max-w-7xl mx-auto my-12 bg-[#15171D] rounded-xl '>
        <div className="grid grid-cols-2 p-8 gap-4 items-center">
      <div className='space-y-6'>
        <p className="text-[#C2F800]">WORKOUT LIBRARY</p>

        <h1 className="text-5xl font-bold">
          TRAIN WITH INTENT. LOG <br />EVERY SET.
        </h1>

        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        <button className="bg-[#C2F800] rounded-xl text-black py-2 px-6">
          BROWSE WORKOUTS
        </button>
      </div>

      <div className='justify-self-end'>
        <Image src={banner} alt="banner-image" width={550}
    height={550}/>
      </div>
    </div>
        </section>
    );
};

export default Banner;