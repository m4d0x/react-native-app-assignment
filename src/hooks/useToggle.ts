//useToggle.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

type ToggleFunction<T> = (currentState: T) => T;

export function useToggle<T>(
  initialState: T,
  toggleFn: ToggleFunction<T>,
  storageKey: string,
  callback?: (newState: T) => void,
) {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    const loadState = async () => {
      const storedState = await AsyncStorage.getItem(storageKey);
      if (storedState !== null) {
        setState(JSON.parse(storedState));
      }
    };
    loadState();
  }, [storageKey]);

  const toggle = useCallback(() => {
    const newState = toggleFn(state);
    setState(newState);
    AsyncStorage.setItem(storageKey, JSON.stringify(newState));
    if (callback) {
      callback(newState);
    }
  }, [toggleFn, state, storageKey, callback]);

  return [state, toggle] as const;
}
