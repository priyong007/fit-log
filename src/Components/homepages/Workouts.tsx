
import React from 'react';

import WorkCard from '../shared/WorkCard';
import { IWork } from '@/types/workType';

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
        {worksData.map((work : IWork, ind : number) => {
          return (
            <WorkCard key={ind} work={work}/>
          );
        })}
      </div>
    </div>
  );
};

export default Workouts;
