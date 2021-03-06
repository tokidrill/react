import { useContext } from 'react';
import { GraphvizContext, NoContext, Context } from '../components/contexts/GraphvizContext';
import { NoGraphvizContextErrorMessage } from '../utils/errors';

export const useGraphvizContext = (): Context => {
  const context = useContext(GraphvizContext);
  if (context === NoContext) {
    throw Error(NoGraphvizContextErrorMessage);
  }
  return context;
};
