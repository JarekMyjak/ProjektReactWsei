import { FC } from 'react'
import useDropdown from 'react-dropdown-hook';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Colors from "../../../styledHelpers/Colors";
import Button from '@material-ui/core/Button'
import BusinessIcon from '@material-ui/icons/Business';

import Menu from "./Menu/Menu"

import Paper from '@material-ui/core/Paper';

import {
    Switch,
    Route
} from "react-router-dom";


const FloatingDiv = styled.div`
    z-index: 1;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 1rem;
`

const DropdownUpperBar = styled.div`
    display: flex;
    width: 20rem;
    justify-content: space-between;
`

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            flexGrow: 1,
        },
        currentPageButton: {
            color: Colors.iconGrey,
        },
    }),
);


const Dropdown: FC = () => {

    const classes = useStyles();
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();


    return (
        <div>

            <div ref={wrapperRef}>
                <DropdownUpperBar onClick={toggleDropdown}>
                    <Switch>
                    <Route path="/workspaces">
                            <Button className={classes.currentPageButton} startIcon={<BusinessIcon />}>
                                <Typography variant="h6" className={classes.title}>
                                    Workspaces
                                </Typography>
                                <KeyboardArrowDownRoundedIcon />
                            </Button>
                        </Route>
                        <Route path="/publications">
                            <Button className={classes.currentPageButton} startIcon={<HomeRoundedIcon />}>
                                <Typography variant="h6" className={classes.title}>
                                    publications
                                </Typography>
                                <KeyboardArrowDownRoundedIcon />
                            </Button>
                        </Route>
                        <Route path="/users">
                            <Button className={classes.currentPageButton} startIcon={<HomeRoundedIcon />}>
                                <Typography variant="h6" className={classes.title}>
                                    News
                                </Typography>
                                <KeyboardArrowDownRoundedIcon />
                            </Button>
                        </Route>
                        <Route path="/">
                            <Button className={classes.currentPageButton} startIcon={<HomeRoundedIcon />}>
                                <Typography variant="h6" className={classes.title}>
                                    Home
                        </Typography>
                                <KeyboardArrowDownRoundedIcon />
                            </Button>
                        </Route>
                    </Switch>
                    {/* <Button className={classes.currentPageButton} startIcon={<HomeRoundedIcon />}>
                        <Typography variant="h6" className={classes.title}>
                            {location.pathname}
                        </Typography>
                        <KeyboardArrowDownRoundedIcon />
                    </Button> */}

                </DropdownUpperBar>
                {dropdownOpen &&
                    <>
                        <FloatingDiv>
                            <Paper elevation={5}>
                                <Menu />
                            </Paper>
                        </FloatingDiv>
                    </>
                }
            </div>
            {/* <div onClick={closeDropdown}>Close menu after this click</div> */}
        </div>
    )
}
export default Dropdown

// import { FC } from "react";
// import useDropdown from 'react-dropdown-hook';

// export const App: FC = () => {
// 	const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
// 	return (
// 		<div>
// 			<div ref={wrapperRef}>
//                 <div onClick={toggleDropdown}>
//                     Click me to open menu or other elemet
//                 </div>
// 				{dropdownOpen &&
// 					<>
// 						{/**Expanded items */}
// 					</> 
// 				}
// 			</div>
// 			<div onClick={closeDropdown}>Close menu after this click</div>
// 		</div>
// 	)
// }