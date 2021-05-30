import {FC} from 'react';
import styled from 'styled-components';
import Colors from '../../../../styledHelpers/Colors';

import houseImg from 'src/icons/house.svg';
import publicationsImg from 'src/icons/publications.svg';
import peopleImg from 'src/icons/people.svg';
import entitiesImg from 'src/icons/entities.svg';
import corporateImg from 'src/icons/entities2.svg';
import administrationImg from 'src/icons/administration.svg';
import { fontSize } from 'src/styledHelpers/FontSizes';

import {
    Link
  } from "react-router-dom";
import { StringifyOptions } from 'node:querystring';

const Wrapper = styled.div`
    background-color:${Colors.white};
    box-shadow: 1px 2px 3px ${Colors.gray};
    width:300px;
    height:220px;
    border-radius:4px;
    overflow:hidden;
`;

const BackgroundImage = styled.img`
    width:300px;
    height:100px;
    object-fit:cover;
`;

const ImgTitleContainter = styled.div`
    display:flex;
    position:relative;
    padding-left: 120px;
    width:300px;
    height:50px;
`;

const IconWrapper = styled.img`
    width:100px;
    height:100px;
    box-sizing:border-box;
    padding:20px;
    background-color:${Colors.white};
    box-shadow: 1px 2px 3px ${Colors.gray};
    border-radius:3px;
    position:absolute;
    left:5px;
    top:-50px;
`;

const Title = styled.span`
    padding-top:5px;
    font-size:${fontSize[18]};
    color:${Colors.darkBlue};
`;

const Info = styled.div`
    margin-top:10px;    
    display:flex;
    align-items:center;
    margin-bottom:10px;
`;

const SmallImg = styled.img`
    width:20px;
    height:20px;
`;

const UserCount = styled.span``;

const LastUpdate = styled.div`
    font-size:${fontSize[12]};
    color:${Colors.gray};
    letter-spacing:.4px;
`;

const img: string = 'https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg'

interface WorkspaceProps {
    bgImg: string,
    title: string,
    description: string,
    path: string,
    userCount: number,
    lastUpdateDays: number,
}

export const SingleWorkspace: FC<WorkspaceProps> = ({bgImg, title, description, path, userCount, lastUpdateDays}:WorkspaceProps) =>{
    return(
        <Link to={`/workspaces/${path}`} style={{ textDecoration: 'none' }}>
        <Wrapper>
            <BackgroundImage src={bgImg}/>
            <ImgTitleContainter>
                <IconWrapper src={houseImg}/>
                <Title>{title}</Title>
            </ImgTitleContainter>
            <Info>
                <SmallImg src={houseImg}/>
                {description}
                •
                <SmallImg src={peopleImg}/>
                <UserCount> {userCount} users</UserCount>
            </Info>
            <LastUpdate>
                Last update {lastUpdateDays} days ago
            </LastUpdate>
        </Wrapper>
        </Link>
    );
}

export default SingleWorkspace;