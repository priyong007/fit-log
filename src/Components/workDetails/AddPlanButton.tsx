'use client'
import { WorksContext } from '@/context/WorksContext';
import { IWork } from '@/types/workType';
import React, { useContext } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const AddPlanButton = ({work}: {work: IWork}) => {

    const {addplan, setAddPlan} = useContext(WorksContext)

    const handleAddPlan = () => {
        console.log('plan button trigerd', work);

        setAddPlan([...addplan, work]);
        alert(`you have read "${work.name}"`)

    }
    return (
        <div>
            <button onClick={() => handleAddPlan()} className="bg-[#C2F800] text-black px-4 py-2 rounded-xl flex gap-2"> <span className='pt-1'><FaRegCalendarAlt /></span>Add to Today&apos;s workout plan</button>
        </div>
    );
};

export default AddPlanButton;