import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import Grid from '@material-ui/core/Grid'
import Colors from "src/styledHelpers/Colors";

import styled from "styled-components";


const PaddedPaper = styled(Paper)`
    padding: 0.5em
`

const UserAvatar = styled.img`
    width:20px;
    height:20px;
    border-radius:10px;
    margin-right:5px;
    margin-left:5px;
`;

const Dot = styled.span`
    width:5px;
    height:5px;
    border-radius:2px;
    margin-right:30px;
    margin-left:30px;
    background-color: gray;
`

interface ISinglePost {
    text: string;
    title: string;
    postId: number;
}

const Update = ({ text, title, postId }: ISinglePost) => {
    return (
        <>
            <PaddedPaper elevation={2}>
                <Typography variant="h5" component="h3" color={'primary'} gutterBottom>
                    {title}
                </Typography>
                <Typography gutterBottom>
                    {text}
                </Typography>

                <Grid container direction="row" alignItems="center">
                    <BusinessIcon style={{ color: Colors.green }}/>
                    <Typography style={{ color: Colors.green }}>
                        SAS
                    </Typography>
                    <Dot />
                    <Typography style={{ color: Colors.gray }}>
                        Last updated 3 years ago
                </Typography>
                </Grid>

            </PaddedPaper>
            <br />
        </>
    )
}

export default Update
