import { FC } from "react";
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import BallotIcon from '@material-ui/icons/Ballot';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';
import BusinessIcon from '@material-ui/icons/Business';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';



import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { IState } from "src/reducers";
import { useSelector } from "react-redux";
import { IPhotosReducer } from "src/reducers/photoReducer";
import { IUsersReducer } from "src/reducers/usersReducer";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    largeImg: {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    marginDiv: {
      marginLeft: theme.spacing(2),
      minWidth: 290,
    },
  }),
);

export const LeftMenu: FC = () => {
  const classes = useStyles();

  const { usersList, photoList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
    ...globalState.users,
    ...globalState.photos
  }));

  return (
    <div className={classes.marginDiv}>
      <Paper elevation={3}>
        <List>
          <Grid container alignItems="center" direction="column">
            <Grid item >
              <Avatar alt="Name" src={photoList[0]?.url} className={classes.largeImg} />
            </Grid>
            <Grid item >
              <Typography variant="h6" component="h6" >
                {usersList[0]?.name}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="caption" display="block" gutterBottom>
              {usersList[0]?.company.name}
              </Typography>
            </Grid>
          </Grid>
          <Divider></Divider>
          <ListItem dense button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Your network" />
            <Button variant="outlined" size="small"><PersonAddIcon /></Button>
          </ListItem>
          <ListItem dense button>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <ListItemText primary="Your Publications" />
            <Button variant="outlined" size="small"><AddIcon /></Button>
          </ListItem>
        </List>
      </Paper>
      <List>
        <ListItem button>
          <ListItemIcon>
            <BallotIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Publications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
            <TrackChangesIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Ecosystem" />
        </ListItem>
        <ListItem button>
          <ListItemIcon >
            <BusinessIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Entities" />
        </ListItem>
      </List>
    </div>
  )
}