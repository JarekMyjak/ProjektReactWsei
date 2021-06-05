import { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Colors from "src/styledHelpers/Colors";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';

import Logo from './logo/Logo';
import Dropdown from './Dropdown/Dropdown';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(2),
            backgroundColor: Colors.white,
        },
        appBarRoot: {
            backgroundColor: Colors.white,
            color: Colors.black,

        },
        menuButton: {
            marginRight: theme.spacing(2),
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const TopBar: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBarRoot}>
                <Toolbar>
                    <Logo/>
                    <Dropdown/>


                    <TextField
                        style={{ maxWidth: "50rem" }}
                        id="outlined-size-small"
                        defaultValue=""
                        variant="outlined"
                        size="small"
                        InputProps={{
                            endAdornment: <InputAdornment position="end"><SearchRoundedIcon /></InputAdornment>,
                        }}
                        fullWidth
                    />

                    <IconButton aria-label="Home" component="button">
                        <Badge badgeContent={0} color="secondary">
                            <HomeRoundedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="Chat" component="button">
                        <Badge badgeContent={3} color="primary">
                            <QuestionAnswerRoundedIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="Notifications" component="button">
                        <Badge badgeContent={3} color="primary">
                            <NotificationsRoundedIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}


// import React, { FC } from 'react'
// import styled from "styled-components";
// import Logo from './logo/Logo';
// //import  Colors  from "../../styledHelpers/Colors";
// import { Dropdown } from './Dropdown/Dropdown';
// import TextField from '@material-ui/core/TextField';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
// import Buttons from './Buttons/Buttons';

// const Wrapper = styled.div`
//     display: flex;
//     align-items: center;
//     align-content: center;
//     justify-content: space-between;
//     background: white;
//     box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.5);
//     margin-bottom: 1rem;
//     padding-left: 1.5rem;
//     padding-right: 1.5rem;
// `;

// export const TopBar: FC = () => {
//     return (
//         <>
//             <Wrapper>
//                 <div style={{ display: "Flex" }}>
//                     <Logo></Logo>
//                     <Dropdown></Dropdown>
//                 </div>
//                 <TextField
//                 style={{maxWidth: "50rem"}}
//                     id="outlined-size-small"
//                     defaultValue=""
//                     variant="outlined"
//                     size="small"
//                     InputProps={{
//                         endAdornment: <InputAdornment position="end"><SearchRoundedIcon/></InputAdornment>,
//                       }}
//                       fullWidth
//                 />

//                 <Buttons/>

//             </Wrapper>
//         </>
//     )
// }

