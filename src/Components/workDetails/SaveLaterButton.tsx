'use client'
import { WorksContext } from '@/context/WorksContext';
import { IWork } from '@/types/workType';
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaRegCalendarAlt } from 'react-icons/fa';

const SaveLaterButton = ({work}: {work: IWork}) => {

    const {saveLater, setSaveLater} = useContext(WorksContext)

    const handleAddPlan = () => {
        console.log('plan button trigerd', work);

        setSaveLater([...saveLater, work]);
        alert(`you have save later "${work.name}"`)

    }
    return (
        <div>
            <button onClick={() => handleAddPlan()} className="bg-[#1B1F28] text-white px-4 py-2 rounded-xl flex gap-2 border border-[#343A46] shadow-md"> <span className='pt-1'><CiBookmark /></span>Save for later</button>
        </div>
    );
};

export default SaveLaterButton;

