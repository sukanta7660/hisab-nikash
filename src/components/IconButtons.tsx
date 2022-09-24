import { Save, Send } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { Stack } from "@mui/system";

const IconButtons = () => {

  return (
    <>
      <Stack spacing={2} margin={2} direction='row'>
        <Button variant='text' startIcon={<Save/>}>Save</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='contained'>Contained</Button>
        <IconButton color='success'>
          <Send/>
        </IconButton>
      </Stack>

      <Stack spacing={2} margin={2} direction='row'>
        <Button 
          variant='contained' 
          startIcon={<Save/>} 
          color='primary'>
          Primary
        </Button>
        <Button variant='contained' startIcon={<Save/>} color='secondary'>Secondary</Button>
        <Button variant='contained' startIcon={<Save/>} color='error'>Error</Button>
        <Button variant='contained' startIcon={<Save/>} color='warning'>Warning</Button>
        <Button variant='contained' startIcon={<Save/>} color='info'>Info</Button>
        <Button variant='contained' startIcon={<Save/>} color='success'>Success</Button>
      </Stack>
    </>
  );

}

export default IconButtons