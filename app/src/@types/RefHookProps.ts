import { Dispatch, SetStateAction } from 'react';

export type RefHookProps = {
  previousState: boolean;
  stateHandler: Dispatch<SetStateAction<boolean>>;
};
