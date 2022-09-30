import {Button, ButtonGroup} from "@mui/material";
import { Stack } from "@mui/system";

const MuiButtons = () => {

  return (
    <>
      <Stack spacing={2} margin={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='contained'>Contained</Button>
      </Stack>

      <Stack spacing={2} margin={2} direction='row'>
        <Button
            variant='contained'
            color='primary'>
            Primary
        </Button>
        <Button
            variant='contained'
            color='secondary'>
            Secondary
        </Button>
        <Button
            variant='contained'
            color='error'>
            Error
        </Button>
        <Button
            variant='contained'
            color='warning'>
            Warning
        </Button>
        <Button
            variant='contained'
            color='info'>
            Info
        </Button>
        <Button
            variant='contained'
            color='success'>
            Success
        </Button>
      </Stack>

      <Stack spacing={2} margin={2} direction='row'>
          <ButtonGroup variant='contained'>
              <Button color='primary'>Primary</Button>
              <Button color='secondary'>Secondary</Button>
              <Button color='error'>Error</Button>
              <Button color='warning'>Warning</Button>
              <Button color='info'>Info</Button>
              <Button color='success'>Success</Button>
          </ButtonGroup>
      </Stack>
    </>
  );

}

export default MuiButtons
