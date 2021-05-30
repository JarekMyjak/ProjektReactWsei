import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import BusinessIcon from '@material-ui/icons/Business';
import styled from 'styled-components'

const Space = styled.span`
    width:5px;
    height:5px;
`
const Wrap = styled(Grid)`
    padding-bottom:1rem;
`

const ProfileButtons = () => {
    return (
        <Wrap container direction="row" alignItems="center" justify="flex-end">
                <BusinessIcon />
                <Typography>
                    Message
                </Typography><Space/>
                <BusinessIcon />
                <Typography>
                    Create a request
                </Typography><Space/>
                <BusinessIcon />
                <Typography>
                    Add to cluster
                </Typography><Space/>
        </Wrap>
    )
}

export default ProfileButtons
