import { createContext, useState, ReactElement } from 'react';


interface ContextType {
  dropdownState: boolean;
  setDropdownState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ContextComponentType {
  children: ReactElement;
}

export const StateContext = createContext<ContextType | any>(null); export function StateDataProvider({ children }: ContextComponentType) {
  const [dropdownState, setDropdownState] = useState(false);

  return (
    <StateContext.Provider value={{ dropdownState, setDropdownState }}>
      {children}
    </StateContext.Provider>);
}
