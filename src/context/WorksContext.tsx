
'use client'
import React, { createContext, ReactNode, useState } from 'react';


export const WorksContext = createContext({})
const WorksProvider = ({children} : {children: ReactNode}) => {

    const [addplan, setAddPlan] = useState([]);
    const [saveLater, setSaveLater] = useState([]);

    const sharedData = {
        addplan,
        setAddPlan,
        saveLater,
        setSaveLater
    }
    return (
        <div>
            <WorksContext.Provider value={sharedData}>{children}</WorksContext.Provider>
        </div>
    );
};

export default WorksProvider;