import { Stack } from '@mui/material';
import * as React from 'react';
import {useEffect} from 'react';
import MuiButtons from './components/MuiButtons';
import MuiTypography from './components/MuiTypography';


function App() {
  useEffect(() => {
     document.title = "Hisab-Nikash";
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <MuiTypography />
      </Stack>

      <MuiButtons />
    </>
  );
}

export default App;
