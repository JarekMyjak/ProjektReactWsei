import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'

import { IState } from 'src/reducers';
import { IUsersReducer } from 'src/reducers/usersReducer';
import { useSelector } from 'react-redux';
import { ISingleUser } from 'src/entities/users';

const ImgBadge = styled.img`
    width: 22px;
    height: 22px;
    border-radius: 11px;
`

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        largeImg: {
            margin: theme.spacing(1),
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        marginDiv: {
            marginLeft: theme.spacing(2),
        },
    }),
);



const Picture = () => {
    const classes = useStyles();

    return (
        <Grid item container direction="column">
            <Grid item >
                <Badge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    badgeContent={<ImgBadge src="https://thispersondoesnotexist.com/image" />}
                >
                    <Avatar alt="Name" src="https://thispersondoesnotexist.com/image" className={classes.largeImg} />
                </Badge>
            </Grid>
            <Grid item >
                <Typography variant="subtitle1" >
                    See profile
                    </Typography>
            </Grid>
        </Grid>)
}


const ProfileForm = () => {
    const classes = useStyles();

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    useEffect(() => {
        setUser(usersList[0]);
        console.log(usersList[0])
        return () => {

        }
    }, [usersList])

    const [User, setUser] = useState<ISingleUser | undefined>(undefined)

    const [isEdit, setIsEdit] = useState(false)
    const handleEdit = () => {
        setIsEdit(!isEdit);
    }

    interface dataTypes {
        phone: string | undefined,
        city: string | undefined,
        name: string | undefined,
        companyName: string | undefined,
        email: string | undefined,
        text: string | undefined,
    }
    const [data, setData] = useState<dataTypes>({
        phone: '',
        city: '',
        name: '',
        companyName: '',
        email: '',
        text: '',
    });

    useEffect(() => {
        const newData = {
            phone: User?.phone,
            city: User?.address.city,
            name: User?.name,
            companyName: User?.company.name,
            email: User?.email,
            text: 'Partner'
        }
        setData(newData);
    }, [User]);


    return (
        <div>
            <Grid container direction="row" spacing={1}>
                <Grid item xs={3}><Picture></Picture></Grid>
                <Grid item xs={5}>
                    <div>{
                        !isEdit ?
                            (<Typography variant="subtitle1" >
                                {data?.name}
                            </Typography>)
                            : (<TextField type='text' value={data?.name} onChange={e => setData({ ...data, name: e.target.value })} />)
                    }</div>
                    <div>{
                        !isEdit ?
                            (<Typography variant="subtitle1" >
                                {data?.companyName}
                            </Typography>)
                            : (<TextField type='text' value={data?.companyName} onChange={e => setData({ ...data, companyName: e.target.value })} />)
                    }</div>
                    <div>{
                        !isEdit ?
                            (<Typography variant="subtitle1" >
                                {data?.city}
                            </Typography>)
                            : (<TextField type='text' value={data?.city} onChange={e => setData({ ...data, city: e.target.value })} />)
                    }</div>
                    <div>{
                        !isEdit ?
                            (<Typography variant="subtitle1" >
                                {data?.text}
                            </Typography>)
                            : (<TextField type='text' value={data?.text} onChange={e => setData({ ...data, text: e.target.value })} />)
                    }</div>
                </Grid>
                <Grid item xs={6} sm container alignItems='flex-end' justify='space-between' direction='column'>
                    <Grid item>
                        <IconButton aria-label="edit" onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <div>{
                            !isEdit ?
                                (<Typography variant="subtitle1" >
                                    {data?.email}
                                </Typography>)
                                : (<TextField type='text' value={data?.email} onChange={e => setData({ ...data, email: e.target.value })} />)
                        }</div>
                        <div>{
                            !isEdit ?
                                (<Typography variant="subtitle1" >
                                    {data?.phone}
                                </Typography>)
                                : (<TextField type='text' value={data?.phone} onChange={e => setData({ ...data, phone: e.target.value })} />)
                        }</div>
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}

export default ProfileForm
