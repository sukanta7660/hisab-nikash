import {Box, Button, ButtonGroup} from '@mui/material';

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

const AlignedButtons = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}>
            <ButtonGroup size="small" aria-label="small button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    )
}

export default AlignedButtons
