import {Stack, Autocomplete, TextField} from '@mui/material';

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const AutoComplete = () => {
    return (
        <>
            <Stack spacing={2} width='250px'>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} label='Skills'/>} />
            </Stack>
        </>
    );
};

export default AutoComplete;
