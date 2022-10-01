import {Rating, Stack} from '@mui/material'
import React, {useState} from 'react';

const StarRating = () => {

    const [value, setValue] = useState<number | null>(null)

    const handleChange = (
        _event: React.ChangeEvent<{}>,
        newValue: number | null
    ) => {
        setValue(newValue)
    }

    return (
        <>
            <Stack spacing={2}>
                <Rating
                    value={value}
                    precision={0.5}
                    size="large"
                    onChange={handleChange}
                />
            </Stack>
        </>
    )
}

export default StarRating
