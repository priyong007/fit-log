
'use client'
import { WorksContext } from '@/context/WorksContext';
import React, { useContext } from 'react';

const MyplanPage = () => {

    const {addplan, saveLater} = useContext(WorksContext);
    console.log(addplan, saveLater, 'addplan', 'savelater');
    return (
        <div>
            add plan: {addplan.length}
            <br />
            save later : {saveLater.length}
        </div>
    );
};

export default MyplanPage;