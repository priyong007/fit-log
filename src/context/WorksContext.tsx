
'use client';

import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { IWork } from '@/types/workType';

interface IWorksContext {
  addplan: IWork[];
  setAddPlan: Dispatch<SetStateAction<IWork[]>>;
  saveLater: IWork[];
  setSaveLater: Dispatch<SetStateAction<IWork[]>>;
}

export const WorksContext = createContext<IWorksContext>(
  {} as IWorksContext
);

const WorksProvider = ({ children }: { children: ReactNode }) => {
  const [addplan, setAddPlan] = useState<IWork[]>([]);
  const [saveLater, setSaveLater] = useState<IWork[]>([]);

  const sharedData = {
    addplan,
    setAddPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <div>
      <WorksContext.Provider value={sharedData}>
        {children}
      </WorksContext.Provider>
    </div>
  );
};

export default WorksProvider;