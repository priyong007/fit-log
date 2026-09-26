import AddPlanButton from '@/Components/workDetails/AddPlanButton';
import SaveLaterButton from '@/Components/workDetails/SaveLaterButton';
import { IWork } from '@/types/workType';
import Image from 'next/image';
import React from 'react';



interface IWorkDtailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
};

const WorkDtailsPageProps = async ({ params }: IWorkDtailsPageProps) => {
  const { id } = await params;
  const worksData = await getWorkouts();
  const work = worksData.find((work: IWork) => String(work.id) === id) as IWork;
  console.log(work, 'work');

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-2 bg-base-100 shadow-sm gap-4">
        <div>
          <Image
            className="rounded-2xl border-amber-500"
            src={work.image}
            alt={work.name}
            width={500}
            height={400}
          />
        </div>
        <div className="">
          <h2 className="card-title text-4xl">{work.name}</h2>
          <p className="py-4">{work.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {work.muscleGroups.map((muscle: string, index: number) => (
              <span
                key={index}
                className="px-4 py-1 rounded-full bg-[#C2F800] text-[#000000] text-sm font-semibold"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr>
                  <th className=" p-2 text-left">EQUIPMENT</th>
                  <td className=" p-2 text-right">{work.equipment}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">DIFFICULTY</th>
                  <td className=" p-2 text-right">{work.difficulty}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">SETS</th>
                  <td className=" p-2 text-right">{work.sets}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">REPS</th>
                  <td className=" p-2 text-right">{work.reps}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">DURATION</th>
                  <td className=" p-2 text-right">{work.duration}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">CALORIES</th>
                  <td className=" p-2 text-right">{work.caloriesBurned}</td>
                </tr>

                <tr>
                  <th className=" p-2 text-left">RATING</th>
                  <td className=" p-2 text-right">{work.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='py-5'>
            <h4 className='py-2'>INSTRUCTIONS</h4>
            <ol className="list-decimal ml-6 space-y-2">
  <li>Lie on the bench with eyes under the bar and feet planted.</li>
  <li>Unrack with locked elbows and lower the bar to mid-chest.</li>
  <li>Press up in a slight arc until elbows lock without bouncing.</li>
  <li>Keep shoulder blades pinched and a natural arch in the back.</li>
  
</ol>
          </div>

          <div className="flex gap-4">
            <AddPlanButton work={work}/>
            <SaveLaterButton work={work} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDtailsPageProps;
