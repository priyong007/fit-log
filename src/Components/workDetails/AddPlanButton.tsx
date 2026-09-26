'use client'
import { WorksContext } from '@/context/WorksContext';
import { IWork } from '@/types/workType';
import React, { useContext } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddPlanButton = ({work}: {work: IWork}) => {

    const {addplan, setAddPlan} = useContext(WorksContext);

    const isAdded = addplan.some(
    (item: IWork) => item.id === work.id
  );

    const handleAddPlan = () => {
       if(isAdded){
        setAddPlan((prev) =>
        prev.filter((item) => item.id !== work.id)
      );
       } else {

          setAddPlan((prev) => [...prev, work]);
      toast.success(`"${work.name}" added to today's workout plan`);
       }


    }
    return (
        <div>
            <button onClick={handleAddPlan} className="bg-[#C2F800] text-black px-4 py-2 rounded-xl flex gap-2">{isAdded ? ('Added') : ( <> <span className='pt-1'><FaRegCalendarAlt /></span>Add to Today&apos;s workout plan </>)} </button>
        </div>
    );
};

export default AddPlanButton;