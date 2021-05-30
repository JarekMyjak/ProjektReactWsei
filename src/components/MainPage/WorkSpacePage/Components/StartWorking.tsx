import { Box, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import { FlexDiv } from 'src/styledHelpers/components'
import styled from 'styled-components'
import entitiesIcon from 'src/icons/entities2.svg';
import peopleIcon from 'src/icons/people.svg';
import publicationsIcon from 'src/icons/publications.svg';

const Background = styled(Paper)`
    background-color: lightgray;
    padding: 0.5rem;
`
const TitleBox = styled(FlexDiv)`
    justify-content: space-between;
`
const ActionCardBG = styled(Paper)`
    padding: 0.5rem;
    margin: 0.2rem;
    flex: 1;
`
const ActionCardContainer = styled(FlexDiv)`
    justify-content: space-between;
    align-items: stretch;
`
const Icon = styled.img`
        height: 4rem;
        margin-right: 1rem;
`
const Bold = styled.span`
    font-weight: bold;
`

interface AC { icon: string, title: string, desc: string }
const ActionCard = ({ icon, title, desc }: AC) => {
    return (
        <Box fontFamily="fontFamily">
            <ActionCardBG >
                <Icon src={icon} />
                <Typography variant='h5'>{title.split(' ').slice(0, -1).join(' ')}<Bold> {title.split(' ').slice(-1)[0]}</Bold></Typography>
                <Typography>{desc}</Typography>
            </ActionCardBG>
        </Box>
    )
}

const StartWorking = () => {
    return (
        <Background variant='outlined'>
            <TitleBox>
                <Typography>Start Working on corporate matters</Typography>
                <Typography>Hide</Typography>
            </TitleBox>
            <ActionCardContainer>
                <ActionCard
                    icon={entitiesIcon}
                    title='Explore your entities'
                    desc='Take a few minutes to see what kind of work you have to do'
                />
                <ActionCard
                    icon={peopleIcon}
                    title='Structure the ownership'
                    desc='Take a few minutes to see what kind of work you have to do'
                />
                <ActionCard
                    icon={publicationsIcon}
                    title='Define the calendar'
                    desc='Take a few minutes to see what kind of work you have to do'
                />
            </ActionCardContainer>
        </Background>
    )
}

export default StartWorking
