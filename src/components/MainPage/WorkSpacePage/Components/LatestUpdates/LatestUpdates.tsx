import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import Colors from "src/styledHelpers/Colors";
import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import Update from './Update'

import { IComment } from 'src/entities/comments';
import { IState } from 'src/reducers';
import { ICommentReducer } from 'src/reducers/commentReducer';
import { IPhotosReducer } from 'src/reducers/photoReducer';
import { IUsersReducer } from 'src/reducers/usersReducer';
import { useSelector } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import CategoryFilterButton from './CategoryFilterButton';
import { InlineFlexDiv } from "src/styledHelpers/components";
import Button from '@material-ui/core/Button';
import BusinessIcon from '@material-ui/icons/Business';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const TitleBarWraper = styled.div`
    display: flex;
    justify-content: space-between
`;
const ButtonBarWraper = styled.div`
    display: flex;
    justify-content: space-around
`;

const CenterH = styled.div`
    display: flex;
    justify-content: center
`;
const Spacer = styled.div`
    display: block;
    width: 1em;
`;

const LatestUpdates = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [Filter, setFilter] = useState('')
    const HandleFilterInput = (e: any) => {
        setFilter(e.target.value)
        setCurrentPage(1)
    }

    const [CategoryFilter, setCategoryFilter] = useState('All')
    const HandleCategoryFilterInput = (e: any) => {
        setCategoryFilter(e)
        console.log(e);
        setCurrentPage(1)
    }

    const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
        ...globalState.comments
    }));

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const GreenButton = styled(Button)`
    background-color: #38ff53;
    color: whitesmoke;
`

    const BlueButton = styled(Button)`
        background-color: #3884ff;
        color: whitesmoke;
    `
    const BlueButton2 = styled(Button)`
    background-color: #5e9cff;
    color: whitesmoke;
`
    const OrangeButton = styled(Button)`
    background-color: #ffb95e;
    color: whitesmoke;
`

    const GrayButton = styled(Button)`
    background-color: #474747;
    color: whitesmoke;
`
    const GrayButton2 = styled(Button)`
    background-color: #b9b9b9;
    color: #3d3d3d;
`

    return (
        <div>
            <TitleBarWraper>
                <Typography variant="h4" component="h3" gutterBottom>
                    Resume your work
                </Typography>
                <InlineFlexDiv>
                    <TextField
                        style={{ maxWidth: "12rem" }}
                        placeholder="Filter by title"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><SearchRoundedIcon /></InputAdornment>,
                        }}
                        fullWidth
                        onChange={HandleFilterInput}
                        value={Filter}
                    />
                    <Spacer />
                    <CategoryFilterButton value={CategoryFilter} handler={HandleCategoryFilterInput} />
                </InlineFlexDiv>
            </TitleBarWraper>
            <ButtonBarWraper>
                <BlueButton variant="outlined">All</BlueButton>
                <GreenButton variant="outlined" startIcon={<BusinessIcon />}>SAS</GreenButton>
                <BlueButton2 variant="outlined" startIcon={<BusinessIcon />}>SARL</BlueButton2>
                <OrangeButton variant="outlined" startIcon={<BusinessIcon />}>Secondary Buisness</OrangeButton>
                <GrayButton variant="outlined" startIcon={<BusinessIcon />}>Communities</GrayButton>
                <GrayButton2 variant="outlined" startIcon={<BusinessIcon />}>POA</GrayButton2>
                <Button variant="outlined" startIcon={<BusinessIcon />}>Survey</Button>
                <Button variant="outlined">...</Button>
            </ButtonBarWraper>
            <br />
            <div>
                {(CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1))
                    .filter(c => c.name.includes(Filter))
                    .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
                    .map((e: IComment, index: number) =>
                        (<Update text={e.body} postId={e.id} title={e.name} key={e.id}/>)
                    )}
            </div>
            <CenterH>
                <Pagination count={Math.floor((CategoryFilter === "All" ? commentList : commentList.filter(c => c.postId === 1)).filter(c => c.name.includes(Filter)).length / 10) - 1} page={currentPage} onChange={handlePageChange} />
            </CenterH>
        </div>
    )
}

export default LatestUpdates
