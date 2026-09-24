import { IWork } from '@/types/workType';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { IoIosTimer } from 'react-icons/io';
import { VscFlame } from 'react-icons/vsc';


interface IWorkCardProps{
    work: IWork
}
const WorkCard = ({work} : IWorkCardProps) => {
    return (
        <div
              
              className="group overflow-hidden rounded-3xl bg-[#15171D] border border-[#222630] shadow-md hover:shadow-2xl transition-all duration-300"
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
                      className="px-4 py-1 rounded-full bg-[#C2F800] text-[#000000] text-sm font-semibold"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Equipment */}
                <div className="mt-2">
                  <p className="font-semibold text-2xl text-[#FFFFFF]">
                    {work.name}
                  </p>
                </div>
                <div className="my-2">
                  <p className="font-semibold text-xl text-[#9CA3AF]">
                    {work.equipment}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 bg-[#20242E]">
                  <div className=" flex px-1 py-1.5 items-center gap-1">
                    <span className="text-xl text-[#9CA3AF]"><IoIosTimer /></span>
                    <p className="font-bold text-[#9CA3AF]">
                      {work.duration} min
                    </p>
                  </div>

                  <div className=" flex px-2 py-1.5 items-center gap-1">
                    <p className="text-xl text-[#9CA3AF]"><VscFlame /></p>
                    <p className="font-bold text-[#9CA3AF]">
                      {work.caloriesBurned} kcal
                    </p>
                  </div>

                  {/* Rating */}
                  <div className=" flex px-2 py-1.5 items-center gap-1">
                    <span className="text-[#9CA3AF] text-lg"><FaStar /></span>
                    <span className="font-bold  text-[#9CA3AF]">
                      {work.rating}
                    </span>
                  </div>
                </div>
                


                {/* Button */}
                <button className="w-full mt-5 py-3 rounded-xl bg-[#C2F800] text-black font-semibold hover:bg-orange-500 transition-colors">
                  View Workout
                </button>
              </div>
            </div>
    );
};

export default WorkCard;