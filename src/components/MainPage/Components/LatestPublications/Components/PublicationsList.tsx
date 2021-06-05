import React, {FC} from 'react';

import styled from 'styled-components';
import { IPost } from 'src/entities/posts';

import Colors from 'src/styledHelpers/Colors';
import { fontSize } from 'src/styledHelpers/FontSizes';

import { ShortPublication } from './ShortPublication';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducers';
import { IPhotosReducer } from 'src/reducers/photoReducer';


const Container = styled.div`
    background-color: ${Colors.white};
    flex-grow:1;
    height:300px;
    border-radius:4px;
    overflow: hidden;
    padding:12px;
`;

const Title = styled.div`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:5px 0px;
`;

const MorePublications = styled.div`
    color: ${Colors.blue};
    font-size: ${fontSize[18]};
`;

const Shorts = styled.div`
    min-height:226px;
`;

export interface ILastPublications{
    publications: IPost[];
}

const postDefaultPhoto:string = 'https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg';

export const PublicationsList: FC<ILastPublications> = (props) =>{

    const { photoList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos,
    }));

    return(
        <Container>
            <Title>
                Latest publications
            </Title>
            <Shorts>
                {props.publications.map((el,index) => (
                    <ShortPublication key={index}
                    postImage={photoList[el?.id]?.url} 
                    date="21.07.2021" 
                    userId={el?.userId} 
                    title={el?.title}/>
                ))}
            </Shorts>
            <MorePublications>See more publications</MorePublications>
        </Container>
    );
}

export default PublicationsList;