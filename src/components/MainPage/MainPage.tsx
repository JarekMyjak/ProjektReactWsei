import React, { FC, useEffect } from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { LeftMenu } from "../LeftMenu/LeftMenu";
import { TopBar } from "../TopBar/TopBar";
import { Grid } from "@material-ui/core";
import Home from "./Components/Home";
import Profile from './Profile/Profile'

import {getUsers} from 'src/actions/usersActions'
import { getPosts } from 'src/actions/postActions';
import { getComments } from 'src/actions/commentActions';
import { getPhotos } from 'src/actions/photoActions';

import { useDispatch } from "react-redux";
import WorkSpacePage from "./WorkSpacePage/WorkSpacePage";
import EntitiesPage from "./EntitiesPage/EntitiesPage";

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const Content = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;

`;


export const MainPage: FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetComments>(getComments());
    return () => {
      // cleanup
    }
  }, [dispatch])

  return (
    <Router>
      <TopBar></TopBar>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <LeftMenu />
        </Grid>
        <Grid item xs={10} >
          <Grid container justify="center">
            <Content>
              <Switch>
              <Route path="/workspaces">
                  <WorkSpacePage/>
                </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
                <Route path="/entities">
                  <EntitiesPage/>
                </Route>
                <Route path="/users">
                  <p>users</p>
                </Route>
                <Route path="/">
                  <Home></Home>
                </Route>
              </Switch>

            </Content>
          </Grid>

        </Grid>

      </Grid>
    </Router>

  )
}