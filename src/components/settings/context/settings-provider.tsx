import { useMemo, useState, useCallback, createContext } from 'react';

import type { SettingsContextValue, SettingsProviderProps } from '../types';

// ----------------------------------------------------------------------

export const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export const SettingsConsumer = SettingsContext.Consumer;

// ----------------------------------------------------------------------

export function SettingsProvider({ children, settings }: SettingsProviderProps) {
  // const values = useLocalStorage<SettingsState>(STORAGE_KEY, settings);
  const values = settings;

  const [openDrawer, setOpenDrawer] = useState(false);

  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      ...values,
      canReset: (() => {}) as any,
      onReset: (() => {}) as any,
      onUpdate: (() => {}) as any,
      onUpdateField: (() => {}) as any,
      openDrawer,
      onCloseDrawer,
      onToggleDrawer,
    }),
    [values, openDrawer, onCloseDrawer, onToggleDrawer]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
