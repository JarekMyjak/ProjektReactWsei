import { Typography } from '@material-ui/core'
import React from 'react'

interface propTypes {
    editable: boolean;
    variant?: string;
}

const TextField = (props: propTypes) => {
    return (
        <>
            <Typography variant={undefined} >
                See profile
            </Typography>
            <input type="text">

            </input>
        </>
    )
}

export default TextField
