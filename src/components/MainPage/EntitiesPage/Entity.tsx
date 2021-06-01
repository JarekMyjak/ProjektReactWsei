import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import Grid from '@material-ui/core/Grid'
import Colors from "src/styledHelpers/Colors";

import styled from "styled-components";

interface propsMosaic {
    isMosaic: boolean;
};
const ContentWraper = styled.div<propsMosaic>`
    ${props => (
        props.isMosaic ? `width:400px;` : `width:100%;`
    )};
`

const Wraper = styled.div`
    display: flex;

`

const PaddedPaper = styled(Paper)`
    padding: 0.5em;
    margin-top: 0.7rem;
    margin-right: 0.7rem;
`

const Dot = styled.span`
    width:5px;
    height:5px;
    border-radius:2px;
    margin-right:30px;
    margin-left:30px;
    background-color: gray;
`
const Thumbnail = styled.img`
    width: 150px;
    height:150px;
    margin-right: 0.4rem;
    border-radius: 3px;
`

interface props {
    title: string;
    postId: number;
    photo: string;
    isMosaic: boolean;
}

const Entity = ({ title, postId, photo, isMosaic }: props) => {
    return (
        <ContentWraper isMosaic={isMosaic}>
            <PaddedPaper elevation={2}>
            <Wraper>
                <Thumbnail src={photo} alt="foto" width="150px" height="150px"/>
                <div>
                <Typography variant="h6" color={'primary'} gutterBottom>
                    {title}
                </Typography>
                <Grid container direction="row" alignItems="center">
                    <BusinessIcon style={{ color: Colors.green }} />
                    <Typography style={{ color: Colors.green }}>
                        SAS
                    </Typography>
                    <Dot />
                    <Typography style={{ color: Colors.gray }}>
                        Last updated 3 years ago
                </Typography>
                </Grid>
                </div>
            </Wraper>
            </PaddedPaper>
        </ContentWraper>
    )
}

export default Entity
