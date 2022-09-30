import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import {useEffect} from 'react';
import IconButtons from './components/IconButtons';
import MuiButtons from './components/MuiButtons';
import MuiTypography from './components/MuiTypography';
import StarRating from "./components/StarRating";


function App() {
  useEffect(() => {
     document.title = "Hisab-Nikash";
  }, []);

  return (
    <>
    <Typography>Typography</Typography>

      <Stack spacing={2}>
        <MuiTypography />
      </Stack>

      <Typography>Buttons</Typography>

      <MuiButtons />

      <Typography>Icon Buttons</Typography>

      <IconButtons/>

      <Typography>Star Rating</Typography>

      <StarRating />
    </>
  );
}

export default App;
