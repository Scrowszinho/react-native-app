import {
  SnackbarContext,
  SnackbarContextProps,
} from '@providers/SnackbarProvider';
import { useContext } from 'react';

const useSnackbar = (): SnackbarContextProps => {
  return useContext(SnackbarContext);
};

export default useSnackbar;
