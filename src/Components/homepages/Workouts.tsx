import Image from 'next/image';
import React from 'react';

const getWorkouts = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
};

const Workouts = async () => {
  const worksData = await getWorkouts();
  console.log(worksData, 'work data');
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold space-y-2">THE LIBRARY</h2>
      <p className="pt-2">Twelve lifts covering every major muscle group.</p>

      <div className=" my-8 grid grid-cols-3 gap-4">
        {worksData.map((work, ind) => {
          return (
            <div
              key={ind}
              className="group overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Workout name */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-2xl font-bold text-white">{work.name}</h2>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {work.muscleGroups.map((muscle: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="px-2 py-1.5 items-center gap-1">
                    <p className="text-xs text-red-400">Duration</p>
                    <p className="font-bold text-gray-800">
                      {work.duration} min
                    </p>
                  </div>

                  <div className="px-2 py-1.5 items-center gap-1">
                    <p className="text-xs text-red-400">Calories</p>
                    <p className="font-bold text-gray-800">
                      {work.caloriesBurned} kcal
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="px-2 py-1.5 items-center gap-1">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="font-bold text-red-800">
                      {work.rating}
                    </span>
                  </div>
                </div>

                {/* Equipment */}
                <div className="mt-5">
                  <p className="text-xs text-gray-400">Equipment</p>
                  <p className="font-semibold text-gray-700">
                    {work.equipment}
                  </p>
                </div>

                {/* Button */}
                <button className="w-full mt-5 py-3 rounded-xl bg-black text-white font-semibold hover:bg-orange-500 transition-colors">
                  View Workout
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Workouts;
