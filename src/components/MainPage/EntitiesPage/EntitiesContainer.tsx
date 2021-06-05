import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import AdjustIcon from '@material-ui/icons/Adjust';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import FilterListIcon from '@material-ui/icons/FilterList';
import ShareIcon from '@material-ui/icons/Share';
import Entity from './Entity'

import { IState } from 'src/reducers';
import { IPhotosReducer } from 'src/reducers/photoReducer';
import { useSelector } from 'react-redux';

import Pagination from '@material-ui/lab/Pagination';
import CategoryFilterButton from './CategoryFilterButton';
import { InlineFlexDiv } from "src/styledHelpers/components";
import Button from '@material-ui/core/Button';
import AppsIcon from '@material-ui/icons/Apps';
import TocIcon from '@material-ui/icons/Toc';
import { ISinglePhoto } from 'src/entities/userPhotos';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Filters from './Filters';

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

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
`

const EntitiesContainer = () => {

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
    const [IsSortedAlphabeticaly, setIsSortedAlphabeticaly] = useState(false);
    const [IsShownAsMosaic, setIsShownAsMosaic] = useState(true);
    const [IsFilterOpened, setIsFilterOpened] = useState(false);

    const { photoList } = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos
    }));

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };



    return (
        <div>
            <TitleBarWraper>
                <Typography variant="h4" component="h3" gutterBottom>
                    Entities
                </Typography>
                <ButtonGroup color="primary">
                    <Button onClick={()=>setIsShownAsMosaic(true)}><AppsIcon/>Mosaic</Button>
                    <Button onClick={()=>setIsShownAsMosaic(false)}><TocIcon/></Button>
                </ButtonGroup>
            </TitleBarWraper>
            <br />
            <TitleBarWraper>
                <Grid container alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AdjustIcon />}
                        endIcon={<ArrowDropDownIcon />}
                    >All</Button>
                    <Button>
                        <MoreHorizIcon />
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button
                        startIcon={<ImportExportIcon />}
                        onClick={()=>setIsSortedAlphabeticaly(!IsSortedAlphabeticaly)}
                    >
                            Sort
                    </Button>
                    <Button
                        startIcon={<FilterListIcon />}
                        onClick={()=>setIsFilterOpened(!IsFilterOpened)}>
                            Filter
                            </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button><ZoomOutMapIcon /></Button>
                    <Divider orientation="vertical" flexItem />
                    <Button startIcon={<ShareIcon />}>Share</Button>
                </Grid>
                <InlineFlexDiv>
                    <TextField
                        style={{ maxWidth: "15rem" }}
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
            <br />
            {IsFilterOpened ? 
            <TitleBarWraper>
                <Filters />
        </TitleBarWraper>
        :<div></div>}
            <br />
            <Container>
                {(CategoryFilter === "All"
                    ? photoList
                    : photoList.filter(c => c.albumId === 2))
                    .filter(c => c.title.includes(Filter))
                    .sort(IsSortedAlphabeticaly ? (a, b) => a.title.localeCompare(b.title) : (a, b) => 0)
                    .slice((currentPage - 1) * 12, (currentPage - 1) * 12 + 12)
                    .map((e: ISinglePhoto, index: number) =>
                        (<Entity postId={e.id} title={e.title} photo={e.thumbnailUrl} key={e.id} isMosaic={IsShownAsMosaic}/>)
                    )}
            </Container>
            <CenterH>
                <Pagination count={Math.floor((CategoryFilter === "All" ? photoList : photoList.filter(c => c.albumId === 1)).filter(c => c.title.includes(Filter)).length / 12) - 1} page={currentPage} onChange={handlePageChange} />
            </CenterH>
        </div>
    )
}

export default EntitiesContainer