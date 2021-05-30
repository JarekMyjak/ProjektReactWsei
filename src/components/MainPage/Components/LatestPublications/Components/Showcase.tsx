import styled from 'styled-components';

import Colors from 'src/styledHelpers/Colors';
import { fontSize } from 'src/styledHelpers/FontSizes';

import { IState } from 'src/reducers';
import { IPhotosReducer } from 'src/reducers/photoReducer';
import { IUsersReducer } from 'src/reducers/usersReducer';
import { useSelector } from 'react-redux';
import { FC } from 'react';

const Wrap = styled.div`
    min-width:300px;    
    height:300px;
    overflow:hidden;
    position:relative;
`;

const Photo = styled.img`
    width:300px;
    height:300px;
    object-fit:cover;
    z-index:99;
`;

const Overlay = styled.div`
    width:300px;
    height:300px;
    position:absolute;
    background: linear-gradient(180deg, transparent 0%, ${Colors.darkBlue} 100%);
    z-index:999;
    left:0px;
    top:0px;
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
    padding: 5px;
    font-size: ${fontSize[14]};
`;

const Title = styled.span`
    color: ${Colors.white};
    margin-bottom:5px;
    letter-spacing: 1px;
    line-height:20px;
    max-width:230px;
    font-size: ${fontSize[16]};
`;
const Date = styled.span`
    color: ${Colors.gray};
    margin-right:10px;
`;
const UserAvatar = styled.img`
    width:15px;
    height:15px;
    border-radius:15px;
    margin-right:10px;
`;
const UserName = styled.span`
    color: ${Colors.gray};
`;

const UserData = styled.div`
    display: flex;
    margin-bottom:30px;
    align-items:center;
    
`;

interface IShowcase{
    postImage: string;
    title: string;
    userId: number;
    date: string;
}

const Showcase: FC<IShowcase> = ({postImage, title, date, userId}, props) => {

    const { usersList, photoList} = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));

    return (
        <Wrap>
            <Photo src={postImage}/>
            <Overlay>
                <Title>{title}</Title>
                <UserData>
                    <Date>{date}</Date>
                    <UserAvatar src={photoList[userId - 1]?.url}/>
                    <UserName>{usersList[userId - 1]?.name}</UserName>
                </UserData>
            </Overlay>  
        </Wrap>
    )
}

export default Showcase
