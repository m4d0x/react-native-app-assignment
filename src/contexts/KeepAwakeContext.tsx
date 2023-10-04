import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import React, { createContext, useContext, useState } from 'react';

const KeepAwakeContext = createContext<{
  isAwake: boolean;
  toggleKeepAwake: () => void;
} | null>(null);

export const useKeepAwake = () => {
  const context = useContext(KeepAwakeContext);
  if (!context) {
    throw new Error('useKeepAwake must be used within a KeepAwakeProvider');
  }
  return context;
};

type KeepAwakeProviderProps = {
  children: React.ReactNode;
};

export const KeepAwakeProvider = ({ children }: KeepAwakeProviderProps) => {
  const [isAwake, setIsAwake] = useState(false);

  const toggleKeepAwake = () => {
    if (isAwake) {
      deactivateKeepAwake();
    } else {
      activateKeepAwake();
    }
    setIsAwake(!isAwake);
  };

  return (
    <KeepAwakeContext.Provider value={{ isAwake, toggleKeepAwake }}>
      {children}
    </KeepAwakeContext.Provider>
  );
};
