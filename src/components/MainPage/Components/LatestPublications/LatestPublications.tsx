import React from 'react'
import styled from 'styled-components';
import Colors from "src/styledHelpers/Colors";

import { useSelector } from 'react-redux';
import { IState } from 'src/reducers';
import { IPost } from 'src/entities/posts';
import { IPostReducer } from 'src/reducers/postReducer';
import { IUsersReducer } from 'src/reducers/usersReducer';
import Showcase from './Components/Showcase';
import PublicationsList from './Components/PublicationsList'
import { Paper } from '@material-ui/core';
import { IPhotosReducer } from 'src/reducers/photoReducer';

const Container = styled(Paper)`
    /* width:1000px; */
    height:300px;
    border-radius:2px;
    overflow: hidden;
    display:flex;
`;


export default function LatestPublications() {

    const { postList, photoList, usersList } = useSelector<IState, IPostReducer & IPhotosReducer & IUsersReducer>(globalState => ({
        ...globalState.posts,
        ...globalState.photos,
        ...globalState.users
    }));

    const threePublications: IPost[] = [];
    for(let i = 0; i<3; i++)
    {
        const random = Math.floor(Math.random() * 99);  
        threePublications.push(postList[random]);
    }

    return (
        <Container elevation={2}>
            <Showcase
                        postImage={photoList[postList[0]?.id]?.url} 
                        date="21.07.2021" 
                        // userId={postList[0].userId} 
                        userId={postList[0]?.userId}
                        title={postList[0]?.title} ></Showcase>
            <PublicationsList publications={threePublications}/>
        </Container>
    )
}
