import { Paper, Typography } from '@material-ui/core'
import React from 'react'

import ClearIcon from '@material-ui/icons/Clear';
import { FlexDiv } from 'src/styledHelpers/components'
import styled from 'styled-components'
import Selector from './Selector';
import FilterTextField from './FilterTextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Space = styled.span`
    width: 1rem;
`
const PaddedPaper = styled(Paper)`
    padding: 1rem;
`

const Filters = () => {
    return (
        <div>
            <Typography>Rows are filtered</Typography><br />
            <PaddedPaper>
                <FlexDiv>
                    <ClearIcon />
                    <Typography>Where</Typography><Space></Space><Space></Space>
                    <Selector startingValue='company' options={['company', 'employee', 'burger', 'frytki']} />
                    <Space></Space>
                    <Selector startingValue='contains' options={['contains', 'Is', 'ketchup', 'majonez']} />
                    <Space></Space>
                    <Space></Space>
                    <FilterTextField />
                </FlexDiv>
                <FlexDiv>
                    <ClearIcon />
                    <Typography>Where</Typography><Space></Space><Space></Space>
                    <Selector startingValue='status' options={['status', 'kebab', 'burger', 'frytki']} />
                    <Space></Space>
                    <Selector startingValue='Is' options={['Is not', 'Is', 'No It isn\'t', 'Yes It IS']} />
                    <Space></Space>
                    <Selector startingValue='In' options={['Out', '?', '!', 'asd']} />
                    <Space></Space>
                    <FilterTextField />
                </FlexDiv>
                <FlexDiv>
                    <ClearIcon />
                    <Typography>And</Typography><Space></Space><Space></Space>
                    <Selector startingValue='status' options={['status', 'kasta', 'bieda', 'bogactwo']} />
                    <Space></Space>
                    <Selector startingValue='Ends before' options={['Ends before', 'Ends after', 'doesnt end']} />
                    <Space></Space>
                    <FilterTextField />
                    <Space></Space>
                    <Selector startingValue='In' options={['Out', '?', 'In', 'asd']} />
                    <FilterTextField />
                    <Space></Space>
                </FlexDiv><br />
                <FlexDiv>
                    <Button variant="contained" startIcon={<AddIcon />}>Default</Button>
                    <Space></Space>
                    <Selector startingValue='Choose property' options={['Choose property', '1', '2', '3']} />
                </FlexDiv>
            </PaddedPaper>
        </div>
    )
}

export default Filters
