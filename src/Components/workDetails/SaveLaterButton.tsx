'use client'
import { WorksContext } from '@/context/WorksContext';
import { IWork } from '@/types/workType';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';

import { toast } from 'react-toastify';

const SaveLaterButton = ({work}: {work: IWork}) => {

    const {saveLater, setSaveLater} = useContext(WorksContext);

    const isAdded = saveLater.some(
    (item: IWork) => item.id === work.id
  );

    const handleAddPlan = () => {
       if(isAdded){
        setSaveLater((prev) =>
        prev.filter((item) => item.id !== work.id)
      );
       } else {

          setSaveLater((prev) => [...prev, work]);
      toast.success(`"${work.name}" added to today's workout plan`);
       }


    }
    return (
        <div>
            <button onClick={handleAddPlan} className="bg-[#1B1F28] text-white px-4 py-2 rounded-xl flex gap-2 border border-[#343A46] shadow-md">{isAdded ? ('Added') : ( <> <span className='pt-1'><CiBookmark /></span>Save for later </>)} </button>
        </div>
    );
};

export default SaveLaterButton;

