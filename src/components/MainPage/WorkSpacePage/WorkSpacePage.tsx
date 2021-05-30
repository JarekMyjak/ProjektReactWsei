import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Baner from './Components/Baner'
import BusinessIcon from '@material-ui/icons/Business';
import entitiesIcon from 'src/icons/entities2.svg';
import StartWorking from './Components/StartWorking';
import { FlexDiv } from 'src/styledHelpers/components';
import styled from 'styled-components';

const Content = styled(FlexDiv)`
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
`

const WorkSpacePage = () => {
    return (
        <Content>
            <Switch>
                <Route path="/workspaces/clientcontract">
                    <Baner
                        title='Client Contracts'
                        description='Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty. Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty, Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty.Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do robotyWorkspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty'
                        bgImg='https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg'
                        icon={entitiesIcon}
                    />
                </Route>
                <Route path="/workspaces/supliercontract">
                    <Baner
                        title='Client Contracts'
                        description='Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty. Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty, Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty.Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do robotyWorkspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty'
                        bgImg='https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg'
                        icon={entitiesIcon}
                    />
                </Route>
                <Route path="/workspaces/corporate">
                    <Baner
                        title='Client Contracts'
                        description='Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty. Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty, Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty.Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do robotyWorkspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty'
                        bgImg='https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg'
                        icon={entitiesIcon}
                    />
                </Route>
                <Route path="/workspaces/groupnorms">
                    <Baner
                        title='Client Contracts'
                        description='Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty. Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty, Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty.Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do robotyWorkspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty'
                        bgImg='https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg'
                        icon={entitiesIcon}
                    />
                </Route>
                <Route path="/workspaces/realestatecontracts">
                    <Baner
                        title='Client Contracts'
                        description='Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty. Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty, Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty.Workspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do robotyWorkspace purpose cośtam cośtam trzeba wiedzieć po co sie przychodzi do roboty'
                        bgImg='https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg'
                        icon={entitiesIcon}
                    />
                </Route>
            </Switch>
            <StartWorking />
            
        </Content>
    )
}

export default WorkSpacePage
