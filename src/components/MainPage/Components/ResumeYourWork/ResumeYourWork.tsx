import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import Colors from "src/styledHelpers/Colors";
import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import Comment from './Comment'

import { IComment } from 'src/entities/comments';
import { IState } from 'src/reducers';
import { ICommentReducer } from 'src/reducers/commentReducer';
import { IPhotosReducer } from 'src/reducers/photoReducer';
import { IUsersReducer } from 'src/reducers/usersReducer';
import { useSelector } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import CategoryFilterButton from './CategoryFilterButton';
import { InlineFlexDiv } from "src/styledHelpers/components"

const TitleBarWraper = styled.div`
    display: flex;
    justify-content: space-between
`;

const CenterH = styled.div`
    display: flex;
    justify-content: center
`;
const Spacer = styled.div`
    display: block;
    width: 1em;
`;

const ResumeYourWork = () => {

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
                    <Spacer/>
                    <CategoryFilterButton value={CategoryFilter} handler={HandleCategoryFilterInput}/>
                </InlineFlexDiv>
            </TitleBarWraper>
            <div>
                {(CategoryFilter === "All" ? commentList : commentList.filter(c=>c.postId===1))
                    .filter(c=>c.name.includes(Filter))
                    .slice((currentPage-1)*10, (currentPage-1)*10+10)
                    .map((e: IComment, index: number) =>
                        (<Comment text={e.body} postId={e.id} title={e.name} key={e.id}></Comment>)
                    )}
            </div>
            <CenterH>
                <Pagination count={Math.floor((CategoryFilter === "All" ? commentList : commentList.filter(c=>c.postId===1)).filter(c=>c.name.includes(Filter)).length/10)-1} page={currentPage} onChange={handlePageChange}/>
            </CenterH>
        </div>
    )
}

export default ResumeYourWork
