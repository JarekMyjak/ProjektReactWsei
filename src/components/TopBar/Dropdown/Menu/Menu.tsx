import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';




import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import { ListItemProps } from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />;
}



//const setFilter = () =>{}

const platformMenuList = [
    {   name: "home",
        component: <ListItemLink button href="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemLink>
                },
    {   name: "publications",
        component: <ListItemLink button href="/publications">
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Publications" />
                </ListItemLink>
                },
                {   name: "people",
        component: <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="People" />
                </ListItem>
                },
                {   name: "entities",
        component: <ListItemLink button href="/entities">
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Entities" />
                </ListItemLink>
                },
                {   name: "administration",
        component: <ListItem button>
                    <ListItemIcon>
                        <SportsKabaddiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Administration" />
                </ListItem>
                },
                ]




const workspacesMenuList = [
    {   name: "client contract",
        component: <ListItemLink button href="/workspaces/clientcontract">
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Client contract" />
                </ListItemLink>
                },
    {   name: "suplier contract",
        component:  <ListItemLink button href="/workspaces/supliercontract">
                    <ListItemIcon>
                        <SportsKabaddiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Suplier contract" />
                </ListItemLink>
                },
                {   name: "corporate",
        component: <ListItemLink button href="/workspaces/corporate">
                    <ListItemIcon>
                        <SportsKabaddiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Corporate" />
                </ListItemLink>
                },
                {   name: "group norms",
        component: <ListItemLink button href="/workspaces/groupnorms">
                    <ListItemIcon>
                        <SportsKabaddiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Group Norms" />
                </ListItemLink>
                },
                {   name: "real estate contracts",
        component: <ListItemLink button href="/workspaces/realestatecontracts">
                    <ListItemIcon>
                        <SportsKabaddiIcon />
                    </ListItemIcon>
                    <ListItemText primary="Real estate contracts" />
                </ListItemLink>
                },
                ]




const Menu = () => {
    const [filter, setFilter] = useState('');
    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase());
  };

    return (
        <>
            <List component="nav" aria-label="main mailbox folders" subheader={<li />}>
                <ListItem>
                    <TextField
                        label="Filter"
                        id="outlined-margin-dense"
                        defaultValue=""
                        margin="dense"
                        variant="outlined"
                        onChange={handleChangeFilter}
                    />
                </ListItem>

                <ListSubheader>Platform</ListSubheader>
                {platformMenuList.filter((el)=>el.name.includes(filter)).map((element)=>element.component)}

                <ListSubheader>Workspaces</ListSubheader>
                {workspacesMenuList.filter((el)=>el.name.includes(filter)).map((element)=>element.component)}
                
            </List>
            <Divider />
            <List component="nav" aria-label="Account">
                <ListSubheader>Account</ListSubheader>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Joanne Marie" src="https://thispersondoesnotexist.com/image" />
                    </ListItemAvatar>
                    <ListItemText primary="Joanne Marie" secondary="See profile" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Privacy" />
                </ListItem>
                <ListItemLink button href="profile">
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemLink>

                <Divider/>
                <ListItem dense button>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
            </List>
        </>
    )
}

export default Menu
