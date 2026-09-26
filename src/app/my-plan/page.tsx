'use client';
import WorkCard from '@/Components/shared/WorkCard';
import { WorksContext } from '@/context/WorksContext';
import { IWork } from '@/types/workType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { VscFlame } from 'react-icons/vsc';

const MyplanPage = () => {
  const { addplan, saveLater, setAddPlan, setSaveLater } = useContext(WorksContext);
  console.log(addplan, saveLater, 'addplan', 'savelater');

  const totalExercises = addplan.length;

  const totalMinutes = addplan.reduce(
    (total: number, work: IWork) => total + work.duration,
    0,
  );

  const totalCalories = addplan.reduce(
    (total: number, work: IWork) => total + work.caloriesBurned,
    0,
  );

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div>
        <h2 className="text-3xl font-bold my-4 ">MY PLAN</h2>
        <p className="text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="bg-[#111317] border border-[#222630] rounded-2xl p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div>
              <p className="text-[#8A92A0]">Exercises</p>
              <h3 className="text-3xl font-bold text-white mt-2">
                {totalExercises}
              </h3>
            </div>

            <div>
              <p className="text-[#8A92A0]">Minutes</p>
              <h3 className="text-3xl font-bold text-white mt-2">
                {totalMinutes}
              </h3>
            </div>

            <div>
              <p className="text-[#8A92A0]">Calories</p>
              <h3 className="text-3xl font-bold text-white mt-2">
                {totalCalories}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        {/* Today's Plan */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content bg-[#111317] border-base-300 p-6">
          {addplan.length > 0 ? (
            addplan.map((work: IWork, index: number) => {
              return (
                <div
                  key={work.id}
                  className="bg-[#15181F] border border-[#252A34] rounded-2xl p-4 mb-4 flex items-center gap-4"
                >
                  {/* Left - Image */}
                  <div className="relative w-28 h-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={work.image}
                      alt={work.name}
                      width={120}
                      height={120}
                    />
                  </div>

                  {/* Middle - Info */}
                  <div className="flex-1">
                    <h2 className="text-white font-bold text-lg">
                      {work.name}
                    </h2>

                    <p className="text-[#8A92A0] text-sm mt-1">
                      {work.equipment}
                    </p>

                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex gap-1">
                        <p>
                          <IoIosTimer />
                        </p>
                        <span className="text-[#9CA3AF]">
                          {work.duration} min
                        </span>
                      </div>

                      <div className="flex gap-1">
                        <p>
                          <VscFlame />
                        </p>
                        <span className="text-[#9CA3AF]">
                          {work.caloriesBurned} kcal
                        </span>
                      </div>

                      <div className="flex gap-1">
                        <p className="p-1">
                          <FaStar />
                        </p>
                        <p className="text-[#9CA3AF]"> {work.rating}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Buttons */}
                  <div className="flex items-center gap-3">
                    <Link href={`/workouts/${work.id}`}>
                      <button className="border border-[#343A46] text-white px-4 py-2 rounded-xl text-sm">
                        View Details
                      </button>
                    </Link>

                    <button className="bg-[#C2F800] text-black px-4 py-2 rounded-xl text-sm font-semibold">
                      ✓ Mark as Done
                    </button>

                    <button
                    onClick={() => {
    const newPlan = addplan.filter((_, i) => i !== index);
    setAddPlan(newPlan);
  }}
                     className="text-[#737B88] text-xl"><RxCross2 />
                     </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="min-h-[300px] flex items-center justify-center">
              <p className="text-gray-400 text-lg">No Plan Added</p>
            </div>
          )}
        </div>

        {/* Saved */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          
        />

        <div className="tab-content bg-[#111317] border-base-300 p-6">
          {saveLater.length > 0 ? (
  saveLater.map((work: IWork) => {
    return (
      <div
        key={work.id}
        className="bg-[#15181F] border border-[#252A34] rounded-2xl p-4 mb-4 flex items-center gap-4"
      >
        {/* Left - Image */}
        <div className="relative w-28 h-20 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={work.image}
            alt={work.name}
            width={120}
            height={120}
          />
        </div>

        {/* Middle - Info */}
        <div className="flex-1">
          <h2 className="text-white font-bold text-lg">
            {work.name}
          </h2>

          <p className="text-[#8A92A0] text-sm mt-1">
            {work.equipment}
          </p>

          <div className="flex items-center gap-4 mt-2 text-sm">
            <div className="flex gap-1">
              <p>
                <IoIosTimer />
              </p>
              <span className="text-[#9CA3AF]">
                {work.duration} min
              </span>
            </div>

            <div className="flex gap-1">
              <p>
                <VscFlame />
              </p>
              <span className="text-[#9CA3AF]">
                {work.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex gap-1">
              <p className="p-1">
                <FaStar />
              </p>
              <p className="text-[#9CA3AF]">
                {work.rating}
              </p>
            </div>
          </div>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-3">
          <Link href={`/workouts/${work.id}`}>
            <button className="border border-[#343A46] text-white px-4 py-2 rounded-xl text-sm">
              View Details
            </button>
          </Link>

          <button className="bg-[#C2F800] text-black px-4 py-2 rounded-xl text-sm font-semibold">
            ✓ Mark as Done
          </button>

          <button
             onClick={() => {
    setSaveLater(
      saveLater.filter((savedWork) => savedWork.id !== work.id)
    );
  }}
            className="text-[#737B88] text-xl"
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    );
  })
)  : (
            <div className="min-h-[300px] flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-bold text-white">
                NOTHING HERE YET
              </h2>

              <p className="text-gray-400 mt-2">
                Browse the library and add a lift to get today moving.
              </p>

              <button className="mt-5 bg-[#C2F800] text-black px-5 py-2 rounded-xl font-semibold">
                Go to workouts
              </button>
            </div>
          )}
        </div>
      </div>
      add plan: {addplan.length}
      <br />
      save later : {saveLater.length}
    </div>
  );
};

export default MyplanPage;
