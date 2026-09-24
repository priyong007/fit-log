import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png'

const Banner = () => {
    return (
        <section className='max-w-7xl mx-auto my-20'>
        <div className="grid grid-cols-2 gap-4 items-center">
      <div className='space-y-4'>
        <p className="text-[#C2F800]">WORKOUT LIBRARY</p>

        <h1 className="text-4xl font-bold">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>

        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today's plan, and watch the week's work add up.
        </p>

        <button className="btn btn-secondary">
          BROWSE WORKOUTS
        </button>
      </div>

      <div>
        <Image src={banner} alt="banner-image" />
      </div>
    </div>
        </section>
    );
};

export default Banner;