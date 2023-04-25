import {createContext} from 'react';

const State = createContext({});
export default State;

export interface context {
  [language: string]: any;
  navIsOpen?: boolean;
  openNav?: () => void;
  closeNav?: () => void;
  translate?: (id: string) => void;
}
